import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, UsersScreen } from './src/screens';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Bienvenido' }} />
        <Stack.Screen name="Users" component={UsersScreen} options={{ title: 'Usuarios' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}