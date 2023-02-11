import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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

