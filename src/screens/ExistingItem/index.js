
import React, { useState } from 'react';
import styles from './styles';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import openDatabase hook
import { openDatabase } from "react-native-sqlite-storage";


// create constant object that refers to database
const shopperDB = openDatabase({name: 'Shopper.db'});

// create constant that contains the name of the lists table
const itemsTableName = 'items';

const ExistingItemScreen = props => {

    const post = props.route.params.post;
    

    const [name, setName] = useState(post.name);
    const [price, setPrice] = useState(post.price.toString());
    const [quantity, setQuantity] = useState(post.quantity.toString());


    const navigation = useNavigation();


    const onItemUpdate = () => {
        if (!name){
            alert('Please enter a shopping item name.');
            return;
        }
        if (!price){
            alert('Please enter a shopping item price.');
            return;
        }
        if (!quantity){
            alert('Please enter a shopping item quantity.');
            return;
        }
        

        shopperDB.transaction(txn => {
            txn.executeSql(
                `UPDATE ${itemsTableName} SET name = "${name}", price = "${price}", quantity = "${quantity}" WHERE id = "${post.id}"`,
                [],
                () => {
                    console.log(`${name} updated successfully`);
                },
                error => {
                    console.log('Error on updating item ' + error.message);
                }
            );
        });

        alert(name + ' updated!');

    }

    const onItemDelete = () => {
        return Alert.alert(
            // title
            'Confirm',
            // message
            'Are you sure you want to delete this item?',
            // code for buttons
            [
                {
                    text: 'Yes',
                    onPress: () => {
                        shopperDB.transaction(txn => {
                            txn.executeSql(
                                `DELETE FROM ${itemsTableName} WHERE id = ${post.id}`,
                                [],
                                () => {
                                    console.log(`${name} deleted successfully`);
                                },
                                error => {
                                    console.log('Error on deleting item ' + error.message);
                                }
                            );
                        });
                        alert('Item Deleted!');
                    },
                },
                {
                    text: 'No',
                },
            ],
        );
    }


  return (
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TextInput 
                value={name}
                onChangeText={value => setName(value)}
                style={styles.name}
                placeholder={'Enter Name'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={price}
                onChangeText={value => setPrice(value)}
                style={styles.price}
                placeholder={'Enter Price'}
                placeholderTextColor={'grey'}
            />
            <TextInput 
                value={quantity}
                onChangeText={value => setQuantity(value)}
                style={styles.quantity}
                placeholder={'Enter Quantity'}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.updateButton} onPress={onItemUpdate}>
                <Text style={styles.buttonText}>Update</Text>
            </Pressable>
            <Pressable style={styles.deleteButton} onPress={onItemDelete}>
                <Text style={styles.buttonText}>Delete</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default ExistingItemScreen;
