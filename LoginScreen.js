import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Text, Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Credenciais estáticas para autenticação
  const validLogin = 'usuario123';
  const validPassword = 'senha123';

  const handleLogin = () => {
    if (login === validLogin && password === validPassword) {
      // Autenticação bem-sucedida, navegue para a HomeScreen
      navigation.navigate('Home');
    } else {
      // Mostra mensagem de erro
      setError('Login ou senha inválidos.');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/ArtLight_logo.png')}
        style={styles.image}
      />

      <TextInput
        style={styles.input}
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
        autoCapitalize="none"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
