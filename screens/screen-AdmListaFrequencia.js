import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { GlobalStyles, Colors } from './stylesCommon'; 
import { AdmHeader } from './components';

const { width, height } = Dimensions.get("window");

export default function MenuADM_Frequencias({ navigation }) {
  const categorias = ["SUB - 05", "SUB - 07", "SUB - 09", "SUB - 11", "SUB - 13"];

  
  return (
    <LinearGradient colors={[Colors.BACKGROUND_GRADIENT_START, Colors.BACKGROUND_GRADIENT_END]} style={GlobalStyles.gradient}>
      <SafeAreaView style={GlobalStyles.safeContainer}>
        
        {/*cabecalho*/}
        <AdmHeader 
            title="Lista de Frequências" 
            iconName="list"
        />
        
        {/*lista das turmas*/}
        <View style={styles.listaContainer}>
          {categorias.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.btnCategoria}
              onPress={() => console.log(`Navegar para Turma: ${item}`)}
            >
              <Text style={styles.btnCategoriaTexto}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/*botao voltar*/}
        <TouchableOpacity style={GlobalStyles.btnBottom} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={width * 0.05} color={Colors.LIGHT_TEXT} />
          <Text style={GlobalStyles.btnBottomText}>Voltar</Text>
        </TouchableOpacity>

      </SafeAreaView>
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
    listaContainer: {
        width: "100%",
        alignItems: "center",
        marginTop: height * 0.03, 
        flex: 1,
    },
    btnCategoria: {
        backgroundColor: Colors.ACTION_BLUE,
        width: "90%",
        paddingVertical: height * 0.025,
        borderRadius: 15,
        alignItems: "center",
        marginBottom: height * 0.02,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    btnCategoriaTexto: {
        color: Colors.LIGHT_TEXT,
        fontSize: width * 0.055,
        fontWeight: "bold",
    },
});
