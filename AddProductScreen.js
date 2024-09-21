// screens/AddProductScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AddProductScreen({ navigation }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const addProduct = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem('products');
      const products = storedProducts ? JSON.parse(storedProducts) : [];
      const newProduct = {
        id: Date.now().toString(),
        name,
        quantity: parseInt(quantity, 10)
      };
      products.push(newProduct);
      await AsyncStorage.setItem('products', JSON.stringify(products));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Text>Product Name</Text>
      <TextInput value={name} onChangeText={setName} />
      <Text>Quantity</Text>
      <TextInput value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      <Button title="Add Product" onPress={addProduct} />
    </View>
  );
}
