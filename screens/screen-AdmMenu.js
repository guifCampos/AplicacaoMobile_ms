import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width, height } = Dimensions.get('window');


export default function MenuAdmin({ navigation }) {



  return (
    <LinearGradient colors={['#16425B', '#81C3D7']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}>
          
          {/* card de boas-vindas */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Image
                source={require('../assets/images/iconEscolinhaFutsal.png')}
                style={styles.logo}
              />
              <Text style={styles.cardHeaderText}>Escolinha de Futsal{"\n"}Santos Anjos</Text>
            </View>

            <View style={styles.cardContent}>
              <Text style={styles.welcomeText}>Bem Vindo</Text>
              <Text style={styles.userText}>#USUÁRIO#</Text>
            </View>
          </View>

          {/*botoes para lista de alunos, lista de frequncia e faturamento*/}
          <View style={styles.buttonRow}>
            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => navigation.navigate('Alunos')}
            >
              <Text style={styles.optionIcon}>👥</Text>
              <Text style={styles.optionText}>Alunos</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => navigation.navigate('Frequencia')}
            >
              <Text style={styles.optionIcon}>🗒️</Text>
              <Text style={styles.optionText}>Lista de Frequência</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() => navigation.navigate('Faturamento')}
            >
              <Text style={styles.optionIcon}>💲</Text>
              <Text style={styles.optionText}>Faturamento</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.birthdaySection}>
            <Text style={styles.birthdayTitle}>🥳🎉 Aniversariantes do Mês 🥳🎉</Text>
            <View style={styles.birthdayList}>
              
              {/*aqui sera listado os alunos aniversariantes do mes*/}
              <Text style={styles.birthdayPlaceholder}>Nenhum aniversariante cadastrado ainda</Text>
            </View>
          </View>

        </ScrollView>

        {/*botao de sair*/}
        <TouchableOpacity
          style={styles.exitButton}
          onPress={() => navigation.replace('Login')}
        >
          <Text style={styles.exitText}>Sair</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    width: '100%',
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginBottom: 16,
  },
  cardHeader: {
    width: '100%',
    backgroundColor: '#0F69C8',
    paddingVertical: 18,
    alignItems: 'center',
  },
  logo: {
    width: Math.min(140, width * 0.35),
    height: Math.min(140, width * 0.35),
    resizeMode: 'contain',
    marginBottom: 6,
  },
  cardHeaderText: {
    color: '#FFF',
    fontWeight: '700',
    textAlign: 'center',
    lineHeight: 20,
  },
  cardContent: {
    backgroundColor: '#FFF',
    width: '100%',
    paddingVertical: 18,
    paddingHorizontal: 14,
    alignItems: 'center',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 6,
  },
  userText: {
    color: '#0F69C8',
    fontWeight: '700',
  },

  /*esitlo dos botoes*/
  buttonRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    marginBottom: 16,
  },
  optionButton: {
    flex: 1,
    marginHorizontal: 6,
    backgroundColor: '#F5F5F5',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  optionIcon: {
    fontSize: 28,
    marginBottom: 6,
  },
  optionText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#003A5A',
    textAlign: 'center',
  },

  /*aniversariantes*/
  birthdaySection: {
    width: '100%',
    backgroundColor: '#1C6DD0',
    borderRadius: 18,
    padding: 10,
    marginBottom: 20,
  },
  birthdayTitle: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 8,
  },
  birthdayList: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 12,
    minHeight: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  birthdayPlaceholder: {
    color: '#888',
    fontStyle: 'italic',
  },

  /*botao sair*/
  exitButton: {
    width: '86%',
    backgroundColor: '#0D4B6C',
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 6,
  },
  exitText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700',
  },
});
