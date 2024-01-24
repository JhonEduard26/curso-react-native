import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Formulario de Login 🚀</Text>
      <Text>Nombres:</Text>
      <TextInput
        placeholder="John Doe"
        onChangeText={() => {}}
        style={{color: 'grey'}}
      />

      <Text>Contraseña:</Text>
      <TextInput
        placeholder="********"
        secureTextEntry
        onChangeText={() => {}}
        style={{color: 'grey'}}
      />

      <Button title="Enviar" onPress={() => console.log('Enviado...')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: 'white',
    borderRadius: 8,
  },
  title: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 'semibold',
  }
})