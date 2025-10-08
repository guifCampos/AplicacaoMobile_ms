import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './screens/screen-Login';
import SignupScreen from './screens/screen-Signup';
import MenuAdmin from './screens/screen-AdmMenu';
import MenuADM_Alunos from './screens/screen-AdmListaAlunos';
import MenuADM_Frequencias from './screens/screen-AdmListaFrequencia';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        {/*tela login*/}
        <Stack.Screen name="Login" component={LoginScreen}/>
        
        {/*tela cadastro*/}
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Criar Conta'}}/>

        {/*tela menu do administrador*/}
        <Stack.Screen name="MenuAdmin" component={MenuAdmin} options={{ title: 'Menu do Administrador'}}/>
      
        {/*tela lista de alunos do administrador*/}
        <Stack.Screen name="Alunos" component={MenuADM_Alunos} options={{ title: 'Lista de Alunos'}}/>

        {/*tela lista de frequencias do administrador e auxiliares*/}
        <Stack.Screen name="Frequencias" component={MenuADM_Frequencias} options={{ title: 'Lista de Frequências'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
