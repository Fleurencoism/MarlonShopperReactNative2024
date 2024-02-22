import React, {useState} from 'react';
import { View, Text, TextInput,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const database = require('../../components/Handlers/database.js');


const AddItemScreen = props => {

    const navigation = useNavigation();

    const [name,setName] =useState('');
    const [price,setPrice] =useState('');
    const [quantity,setQuantity] =useState('');

    const onItemAdd = () => {
        if (!name){
            alert('Please enter a item name.')
            return
        }
        if (!price){
            alert('Please enter a item price.')
            return
        }if (!quantity){
            alert('Please enter a item quantity.')
            return
        }

        try{
            database.addItem(name,price,quantity);
        } catch (error){
            console.log('Error adding item '+ error);
        }
        
        alert(name + ' Added.');
        //navigation.navigate('Start Shopping!');
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
                placeholderTextColor={'grey'}
            />
        </View>
        <View style={styles.bottomContainer}>
            <Pressable style={styles.button} onPress={onItemAdd}>
                <Text style={styles.buttonText}>Add</Text>
            </Pressable>
        </View>
    </View>
  );
};

export default AddItemScreen;