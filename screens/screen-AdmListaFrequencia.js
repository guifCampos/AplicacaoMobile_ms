import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";


const { width } = Dimensions.get("window");


export default function MenuADM_Frequencias({ navigation }) {
  const categorias = ["SUB - 05", "SUB - 07", "SUB - 09", "SUB - 11", "SUB - 13"];


  
  return (
    <LinearGradient colors={["#16425B", "#81C3D7"]} style={styles.container}>
      <SafeAreaView style={styles.safe}>
        
        <View style={styles.header}>
          <Image
            source={require("../assets/images/iconEscolinhaFutsal.png")}
            style={styles.logo}
          />
          <View style={styles.headerCard}>
            <Ionicons name="menu" size={24} color="#000" />
            <Text style={styles.headerText}>Lista de Frequências</Text>
          </View>
        </View>

        {/*lista das turmas*/}
        <View style={styles.lista}>
          {categorias.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.btnCategoria}
              onPress={() => alert(`Abrindo frequência de ${item}`)}//exibe um alert quando clicar no botao
            >
              <Text style={styles.txtCategoria}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/*botao voltar*/}
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={18} color="#FFF" />
          <Text style={styles.txtVoltar}>Voltar</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safe: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  header: {
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  headerCard: {
    backgroundColor: "#FFF",
    width: width * 0.85,
    borderRadius: 20,
    paddingVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
    marginTop: -10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 6,
  },
  lista: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  btnCategoria: {
    backgroundColor: "#0F69C8",
    width: "90%",
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 3,
    elevation: 2,
  },
  txtCategoria: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  btnVoltar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0D4B6C",
    width: width * 0.7,
    paddingVertical: 12,
    borderRadius: 25,
  },
  txtVoltar: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 6,
    fontSize: 15,
  },
});
