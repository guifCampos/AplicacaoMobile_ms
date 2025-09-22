import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Picker } from 'react-native-picker/picker';
import { ScrollView } from 'react-native-web';


export default function LoginScreen({ navigation }) {

    const handleSignUp = () => {
        //logica de cadastro aqui
        //apos o cadastro bem-sucedido, redirecionar para a tela de login
        navigation.replace('Login'); 
    }

  return (
        <SafeAreaView style={{ flex: 1 }}>
            <LinearGradient colors={['#16425B', '#81C3D7']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
          
                <ScrollView contentContainerStyle={{ alignItems: 'center' }}>

                    {/*logo*/}
                    <Image source={require('../assets/images/iconEscolinhaFutsal.png')} style={styles.logo}/>

                    {/*fomulario para cadastro*/}
                    <View style={styles.formulario}>
                        <TextInput placeholder='Nome Completo do Aluno' placeholderTextColor='#aaa' style={styles.input}/>
                        <TextInput placeholder='Nome do Responsável' placeholderTextColor='#aaa' style={styles.input}/>

                        <View style={styles.row}>
                            <TextInput 
                                style={[styles.input, {flex: 1, marginRight: 8}]} 
                                placeholder='Senha'
                                placeholderTextColor= '#aaa'
                                secureTextEntry
                            />
                            <TextInput 
                                style={[styles.input, {flex: 1, marginLeft: 8}]} 
                                placeholder='Confirmar Senha'
                                placeholderTextColor= '#aaa'
                                secureTextEntry
                            />
                        </View>

                        {/*data de nascimento*/}
                        <View style={styles.row}>
                        <Picker
                            selectedValue={dia}
                            onValueChange={(v) => setDia(v)}
                            style={[styles.picker, { flex: 1, marginRight: 4 }]}
                        >
                            <Picker.Item label="Dia" value="" />
                            {[...Array(31).keys()].map(i => (
                            <Picker.Item key={i+1} label={`${i+1}`} value={`${i+1}`} />
                            ))}
                        </Picker>
                        <Picker
                            selectedValue={mes}
                            onValueChange={(v) => setMes(v)}
                            style={[styles.picker, { flex: 1, marginHorizontal: 4 }]}
                        >
                            <Picker.Item label="Mês" value="" />
                            {["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"].map((m,i)=>(
                            <Picker.Item key={i} label={m} value={m} />
                            ))}
                        </Picker>
                        <Picker
                            selectedValue={ano}
                            onValueChange={(v) => setAno(v)}
                            style={[styles.picker, { flex: 1, marginLeft: 4 }]}
                        >
                            <Picker.Item label="Ano" value="" />
                            {Array.from({length: 30}, (_, i) => 2024 - i).map(a => (
                            <Picker.Item key={a} label={`${a}`} value={`${a}`} />
                            ))}
                        </Picker>
                        </View>

                        <TextInput style={styles.input} placeholder='Endereço' placeholderTextColor='#aaa'/>
                        <TextInput style={styles.input} placeholder='Telefone' placeholderTextColor='#aaa' keyboardType='phone-pad'/>
                        
                        {/*botao SignUp*/}
                        <TouchableOpacity style={styles.botao} onPress={handleSignUp}>
                            <Text style={styles.textoBotao}> Sign Up </Text>
                        </TouchableOpacity>

                        {/*voltar para a tela de LogIn*/}
                        <View style={styles.loginRow}>
                            <Text style={{ color: '#FFF' }}> Já tem uma conta? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Text style={{ color: '#FFF', fontWeight: 'bold', marginLeft: 5 }}> Log In </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            <StatusBar style="auto"/>
            </LinearGradient>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode:'contain'
  },
  formulario: {
    width: '95%',
    backgroundColor: '#1C6DD0',
    borderRadius: 20,
    padding: 20,
  },
  input: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  row: {
    flexDirection:'row',
    justifyContent:'space-between',
    marginBottom:12
  },
  picker: {
    backgroundColor:'#FFF',
    borderRadius:10,
  },
  botao: {
    backgroundColor:'#333',
    padding:15,
    borderRadius:30,
    alignItems:'center',
    marginTop:10,
    marginBottom:15,
  },
  textoBotao: {
    color:'#FFF',
    fontWeight:'bold',
    fontSize:16,
  },
  loginRow: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:10,
  }
});

    
