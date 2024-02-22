import React, {useState} from 'react';
import styles from './styles';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { openDatabase } from "react-native-sqlite-storage";

//create constant object that refers to database
const shopperDB = openDatabase({name: 'Shopper.db'});

//create constant that contains the of the lists table
const itemsTableName = 'items';

const ExistingItemScreen = props => {

    const post = props.route.params.post;

    const [name,setName] =useState(post.name);
    const [price,setPrice] =useState(post.store);
    const [quantity,setQuantity] =useState(post.priority);

    

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
                placeholderTextColor={'grey'}
            />
        </View>
        <View style={styles.bottomContainer}>            
            <Pressable style={styles.addButton} onPress={onAddItem}>
                <Text style={styles.buttonText}>Add Item</Text>
            </Pressable>
            
        </View>
    </View>
  );
};

export default ExistingItemScreen;