import { FlatList, StyleSheet, Text, View } from 'react-native';

export const UsersScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Users!</Text>
      <FlatList
        data={[
          {name: 'Juan'},
          {name: 'Pedro'},
          {name: 'Maria'},
          {name: 'Jose'},
        ]}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    minHeight: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'semibold',
  }
})
