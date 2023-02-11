import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput,SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import React from 'react';

export default function App() {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');
  const [count, setCount] = useState(0);
  const onPress = () => setCount(count => number * 14000);


  return (
    <SafeAreaView>

      <Text style={styles.container}>Program ini adalah program konversi mata uang dari dollar ke rupiah</Text>
      
      <Text style={styles.container2}>Masukan nilai dollar</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Masukan Angka"
        keyboardType="numeric"
      />
      
        
      
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Konversikan</Text>
      </TouchableOpacity>

      <Text style={styles.hasil}>Hasilnya: Rp.{count},-</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    margin: 5,
    borderWidth: 0,
    padding: 10,
  },

  container2: {
    margin: 2,
    marginTop: 20,
    padding: 10,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF8B13',
    padding: 10,
    margin: 10,
  },

  hasil: {
    fontSize: 25,
    margin: 5,
    borderWidth: 0,
    padding: 10,
  },
});

