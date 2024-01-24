import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { LoginForm } from './src/components';

export default function App() {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
      <Image source={{
        uri: 'https://reactnative.dev/docs/assets/p_cat2.png'
      }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput
        style={{ height: 40 }}
        placeholder="Escribe algo..."
        onChangeText={newText => setText(newText)}
        defaultValue={text}
      />

      <Text>Hallo: {text}</Text>

      <LoginForm />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#234af2',
  },
  title: {
    fontSize: 32,
    fontWeight: 'semibold',
    color: 'white',
  }
})
