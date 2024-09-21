// screens/ProductDetailScreen.js
import React from 'react';
import { View, Text, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  const removeProduct = async () => {
    try {
      const storedProducts = await AsyncStorage.getItem('products');
      let products = storedProducts ? JSON.parse(storedProducts) : [];
      products = products.filter(p => p.id !== product.id);
      await AsyncStorage.setItem('products', JSON.stringify(products));
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  const confirmRemove = () => {
    Alert.alert(
      "Remove Product",
      "Are you sure you want to remove this product?",
      [
        { text: "Cancel", style: "cancel" },
        { text: "OK", onPress: removeProduct }
      ]
    );
  };

  return (
    <View>
      <Text>Product: {product.name}</Text>
      <Text>Quantity: {product.quantity}</Text>
      <Button title="Remove Product" onPress={confirmRemove} />
    </View>
  );
}
