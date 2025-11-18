//aqui fica a parte estrutural que pode ser reutilizada em outras telas
import React from 'react';
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { HeaderStyles, CardStyles, Colors } from './stylesCommon'; 

const { width, height } = Dimensions.get('window');

//cabecalho unificado (o card azul com o logo e o nome da escolinha + o card branco com o titulo da tela)
export function AdmHeader({ title, iconName }) {
  return (
    //conteiner do cabecalho unificado
    <View style={{ width: '100%', alignItems: 'center' }}>
      
      {/*parte auzl*/}
      <View style={HeaderStyles.headerContainer}>
        <View style={HeaderStyles.headerContent}>
          <Image
            source={require('../assets/images/iconEscolinhaFutsal.png')} 
            style={HeaderStyles.logo}
          />
          <View style={HeaderStyles.textHeader}>
            <Text style={HeaderStyles.nomeEscolinha}>Escolinha de Futsal</Text>
            <Text style={HeaderStyles.subtitulo}>Santos Anjos</Text>
          </View>
        </View>
      </View>

      {/*parte branca*/}
      <View style={CardStyles.cardOverlapContainer}> 
        <View style={CardStyles.listTitleCard}>
          <Ionicons name={iconName} size={width * 0.08} color={Colors.DARK_TEXT} />
          <Text style={CardStyles.listTitleText}>{title}</Text>
        </View>
      </View>

    </View>
  );
}


//cabecalho azul (com o logo e o nome da escolinha)
export function MainHeader() {
  return (
    <View style={HeaderStyles.headerContainer}>
      <View style={HeaderStyles.headerContent}>
        <Image
          source={require('../assets/images/iconEscolinhaFutsal.png')} 
          style={HeaderStyles.logo}
        />
        <View style={HeaderStyles.textHeader}>
          <Text style={HeaderStyles.nomeEscolinha}>Escolinha de Futsal</Text>
          <Text style={HeaderStyles.subtitulo}>Santos Anjos</Text>
        </View>
      </View>
    </View>
  );
}

//card de boas vindas (com o nome do usuario)
export function WelcomeCard({ userName = "#USUÁRIO#" }) {
  return (
    <View style={CardStyles.cardOverlapContainer}>
        <View style={CardStyles.welcomeCard}>
            <Text style={CardStyles.welcomeText}>Bem Vindo</Text>
            <Text style={CardStyles.userNameText}>{userName}</Text>
        </View>
    </View>
  );
}