import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from 'expo-checkbox';

//ajusta a tela conforme o tamanho do dispositivo
const { width, height } = Dimensions.get('window');

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
              placeholder='Nome de Acesso' 
              placeholderTextColor='#aaa' 
              style={styles.caixaDeTexto}
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
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
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
    width: Math.min(200, width * 0.6),
    height: Math.min(200, width * 0.6),
    marginBottom: 20,
    resizeMode: 'contain',
  },
  loginFormulario:{
    width: width * 0.9,
    maxWidth: 400,
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
    paddingVertical: Math.max(12, height * 0.015),
    paddingHorizontal: 12,
    marginBottom: 15,
    fontSize: 16,
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
    paddingVertical: Math.max(14, height * 0.02),
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
