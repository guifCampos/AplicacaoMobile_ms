import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './screens/screen-Login';
import SignupScreen from './screens/screen-Signup';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/*tela login*/}
        <Stack.Screen name="Login" component={LoginScreen}/>
        
        {/*tela cadastro*/}
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Criar Conta'}}/>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
