import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal,Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function MenuADM_Alunos({ navigation }) {
  const [filterVisible, setFilterVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAluno, setSelectedAluno] = useState(null);

  const alunos = [];

  const renderAluno = ({ item }) => (
    <View style={styles.cardAluno}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Ionicons name="person-circle-outline" size={48} color="#003A5A" />
        <View style={{ marginLeft: 10 }}>
          <Text>Nome: {item.nome}</Text>
          <Text>Resp: {item.resp}</Text>
          <Text>Turma: {item.turma}</Text>
          <Text>Mensalidade: <Text style={{color: item.status === "Atrasado" ? "red" : "green"}}>{item.status}</Text></Text>
        </View>
      </View>

      {/*acoes*/}
      <View style={styles.acoes}>
        {/*edita os dados do aluno*/}
        <TouchableOpacity style={styles.btnAcao}><MaterialIcons name="edit" size={20} /><Text>Editar</Text></TouchableOpacity>
        {/*deleta o aluno*/}
        <TouchableOpacity style={styles.btnAcao}><MaterialIcons name="delete" size={20} /><Text>Deletar</Text></TouchableOpacity>
        {/*emite a cobranca da mensalidade*/}
        <TouchableOpacity style={styles.btnAcao}><FontAwesome5 name="money-bill" size={20} /><Text>Cobrar</Text></TouchableOpacity>
        {/*contata o responsavel*/}
        <TouchableOpacity style={styles.btnAcao}><Ionicons name="chatbubbles" size={20} /><Text>Contatar</Text></TouchableOpacity>
        {/**/}
        <TouchableOpacity 
          style={styles.btnAcao} 
          onPress={() => { setSelectedAluno(item); setModalVisible(true); }}
        >
          <Ionicons name="information-circle" size={20} />
          <Text>Mais Infos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <LinearGradient colors={["#16425B", "#81C3D7"]} style={styles.container}>
      <SafeAreaView style={{ flex: 1, padding: 12 }}>
        
        <View style={styles.header}>
          <Ionicons name="people" size={28} color="#FFF" />
          <Text style={styles.headerText}>Lista de Alunos</Text>
        </View>

        <View style={styles.topRow}>
            {/*botao para adicionar aluno manualmente*/}
          <TouchableOpacity style={styles.btnAdicionar}>
            <Ionicons name="person-add" size={20} color="#FFF" />
            <Text style={styles.btnText}>Adicionar</Text>
          </TouchableOpacity>
            {/*botao para abrir os filtros*/}
          <TouchableOpacity onPress={() => setFilterVisible(!filterVisible)}>
            <Ionicons name="filter" size={28} color="#FFF" />
          </TouchableOpacity>
        </View>

        {/*filtros*/}
        {filterVisible && (
          <View style={styles.filterBox}>
            <Text style={styles.filterTitle}>Selecione o filtro</Text>
            {["Pagamento em dia", "Pagamento atrasado", "A-Z", "Sub 05", "Sub 07", "Sub 09", "Sub 11", "Sub 13"].map((f, i) => (
              <TouchableOpacity key={i} style={styles.filterOption}>
                <Text>{f}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {/*lista de alunos*/}
        <FlatList
          data={alunos}
          keyExtractor={(item) => item.id}
          renderItem={renderAluno}
          style={{ marginTop: 10 }}
        />

        {/*botao voltar*/}
        <TouchableOpacity style={styles.btnVoltar} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={20} color="#FFF" />
          <Text style={styles.btnVoltarText}>Voltar</Text>
        </TouchableOpacity>

        {/*"pop-up" de mais informacoes do aluno*/}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
              <Text style={styles.modalTitle}>Mais Informações</Text>
              {selectedAluno && (
                <>
                  <Text>Nome: {selectedAluno.nome}</Text>
                  <Text>Responsável: {selectedAluno.resp}</Text>
                  <Text>Turma: {selectedAluno.turma}</Text>{/*turma/categoria que o aluno esta treinando*/}
                  <Text>Mensalidade: {selectedAluno.status}</Text>{/*apresentar se a mensalidade foi paga ou nao --> sim ou nao*/}
                  <Text>Frequência: </Text>{/*deve apresentar a porcentagem da frequencia do aluno nos treinos*/}
                  <Text>Endereço: </Text>
                  <Text>Status da conta: </Text>{/*deve apresentar se esta ativada ou desativada*/}
                </>
              )}
              <TouchableOpacity style={styles.btnFechar} onPress={() => setModalVisible(false)}>
                <Text style={styles.btnFecharText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1 
},
  header: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginBottom: 10 
},
  headerText: { 
    color: "#FFF", 
    fontSize: 20, 
    marginLeft: 10, 
    fontWeight: "bold" 
},
  topRow: { 
    flexDirection: "row", 
    justifyContent: "space-between", 
    marginBottom: 10 
},
  btnAdicionar: { 
    flexDirection: "row", 
    alignItems: "center", 
    backgroundColor: "#0F69C8", 
    padding: 10, 
    borderRadius: 10 
},
  btnText: { 
    color: "#FFF", 
    marginLeft: 5, 
    fontWeight: "bold" 
},
  filterBox: { 
    backgroundColor: "#FFF", 
    padding: 10, 
    borderRadius: 10, 
    marginBottom: 10 
},
  filterTitle: { 
    fontWeight: "bold", 
    marginBottom: 5 
},
  filterOption: { 
    paddingVertical: 4 
},
  cardAluno: { 
    backgroundColor: "#FFF", 
    borderRadius: 10, 
    padding: 10, 
    marginBottom: 10 
},
  acoes: { 
    flexDirection: "row", 
    flexWrap: "wrap", 
    justifyContent: "space-between", 
    marginTop: 10 
},
  btnAcao: { 
    flexDirection: "row", 
    alignItems: "center", 
    gap: 5, 
    margin: 4, 
    padding: 6, 
    borderWidth: 1, 
    borderColor: "#CCC", 
    borderRadius: 8 
},
  btnVoltar: { 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "center", 
    backgroundColor: "#0D4B6C", 
    padding: 14, 
    borderRadius: 20, 
    marginTop: 10 
},
  btnVoltarText: { 
    color: "#FFF", 
    fontSize: 16, 
    marginLeft: 5 
},
  modalContainer: { 
    flex: 1, 
    backgroundColor: "rgba(0,0,0,0.5)", 
    justifyContent: "center", 
    alignItems: "center" 
},
  modalBox: { 
    width: width * 0.8, 
    backgroundColor: "#FFF", 
    borderRadius: 15, 
    padding: 20 
},
  modalTitle: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
},
  btnFechar: { 
    backgroundColor: "#0D4B6C", 
    padding: 10, 
    borderRadius: 10, 
    marginTop: 10, 
    alignItems: "center" 
},
  btnFecharText: { 
    color: "#FFF", 
    fontWeight: "bold" 
},
});
