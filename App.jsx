import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import LoginScreen from './screens/screen-Login';
import SignupScreen from './screens/screen-Signup';
import MenuAdmin from './screens/screen-AdmMenu';
import MenuADM_Alunos from './screens/screen-AdmListaAlunos';
import MenuADM_Frequencias from './screens/screen-AdmListaFrequencia';
import FrequenciaSub05 from './screens/screen-AdmFrequenciaSub05';
import FrequenciaSub07 from './screens/screen-AdmFrequenciaSub07';
import FrequenciaSub09 from './screens/screen-AdmFrequenciaSub09';
import FrequenciaSub11 from './screens/screen-AdmFrequenciaSub11';
import FrequenciaSub13 from './screens/screen-AdmFrequenciaSub13';

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

        {/*tela de frequencia para a turma sub-05*/}
        <Stack.Screen name="FrequenciaSub05" component={FrequenciaSub05} options={{ title: 'SUB - 05'}}/>

        {/*tela de frequnecia para a turma sub-07*/}
        <Stack.Screen name="FrequenciaSub07" component={FrequenciaSub07} options={{ title: 'SUB - 07'}}/>

        {/*tela de frequencia para a turma sub-09*/}
        <Stack.Screen name="FrequenciaSub09" component={FrequenciaSub09} options={{ title: 'SUB - 09'}}/>

        {/*tela de frequencia para a turma sub-11*/}
        <Stack.Screen name="FrequenciaSub11" component={FrequenciaSub11} options={{ title: 'SUB - 11'}}/>

        {/*tela de frequencia para a turma sub-13*/}
        <Stack.Screen name="FrequenciaSub13" component={FrequenciaSub13} options={{ title: 'SUB - 13'}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
