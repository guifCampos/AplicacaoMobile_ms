import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from 'expo-checkbox';



export default function LoginScreen({ navigation }) {

  const [lembre, setLembre] = useState(false);

  const hadleLogin = () => {
    //autenticacao aqui
    //se o login bem-sucedido vai para a tela principal referente ao login acessado
    //ex: 
      //admin -> tela principal do admin
      //usuario -> tela principal do usuario
    //navigation.replace('Main'); //Substitui a tela de login para evitar voltar a ela
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <LinearGradient colors={['#16425B', '#81C3D7']} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={styles.container}>
          
          {/*logo*/}
          <Image source={require('../assets/images/iconEscolinhaFutsal.png')} style={styles.logo}/>
            
          {/*fomulario do login*/}
          <View style={styles.loginFormulario}>

            {/*campo de nome de acesso para LogIn*/}
            <Text style={styles.label}> Usuário </Text>
            <TextInput 
              placeholder='Email' 
              placeholderTextColor='#aaa' 
              style={styles.caixaDeTexto}  
              keyboardType='email-address'
            />
            
            {/*campo de sennha para LogIn*/}
            <Text style={styles.label}> Senha </Text>
            <TextInput 
              placeholder='Senha' 
              placeholderTextColor='#aaa' 
              secureTextEntry style={styles.caixaDeTexto} 
              autoCapitalize='none' 
              autoCorrect={false}
            />

            {/*opcao lembre-se de mim*/}
            <View style={styles.row}>
              <View style={styles.row}>
                <CheckBox value={lembre} onValueChange={setLembre} color={lembre ? '#FFF': undefined} />
                <Text style={{ color: '#FFF', marginLeft: 8 }}> Lembrar de mim </Text>
              </View>

              {/*opcao esqueceu senha*/}
              <TouchableOpacity>
                <Text style={styles.esqueceuSenha}> Esqueceu a senha? </Text>
              </TouchableOpacity>
            </View>
            
            {/*botao para fazer o LogIn*/}
            <TouchableOpacity style={styles.botaoLogin} onPress={hadleLogin}>
              <Text style={styles.textoLogin}> LogIn </Text>
            </TouchableOpacity>

            {/*botao para criar uma conta*/}
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.botaoCriarConta}> Criar conta </Text>
            </TouchableOpacity>

          </View>  
        
      <StatusBar style="auto"/>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10
  },
  logo:{
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  loginFormulario:{
    width: '90%',
    backgroundColor: '#1C6DD0',
    padding: 20,
    borderRadius: 20,
    elevation: 5,
  },
  label:{
    color: '#FFF',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  caixaDeTexto:{
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  esqueceuSenha:{
    color: '#FFF',
    textDecorationLine: 'underline',
  },
  botaoLogin:{
    backgroundColor: '#074AA6',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  textoLogin:{
    color: '#FFF',
    fontWeight: 'bold',
  },
  botaoCriarConta:{
    color: '#FFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
