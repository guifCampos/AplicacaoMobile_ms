import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList,} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { GlobalStyles, Colors, CardStyles } from './stylesCommon'; 
import { AdmHeader } from './components';

const { width, height } = Dimensions.get("window");

//exemplo de dados de alunos
const DADOS_ALUNOS = [
    { id: '1', nome: 'NomeDoAluno#1', presente: false },
    { id: '2', nome: 'NomeDoAluno#2', presente: false },
    { id: '3', nome: 'NomeDoAluno#3', presente: false },
    { id: '4', nome: 'NomeDoAluno#4', presente: false },
    { id: '5', nome: 'NomeDoAluno#5', presente: false },
    { id: '6', nome: 'NomeDoAluno#6', presente: false },
    { id: '7', nome: 'NomeDoAluno#7', presente: false },
    { id: '8', nome: 'NomeDoAluno#8', presente: false },
    { id: '9', nome: 'NomeDoAluno#9', presente: false },
    { id: '10', nome: 'NomeDoAluno#10', presente: false },
];

export default function FrequenciaSub13({ navigation, route }) {
    const turma = route.params?.turma || "SUB - 13"; 
    const [alunos, setAlunos] = useState(DADOS_ALUNOS);

    const togglePresenca = (alunoId) => {
        setAlunos(prevAlunos =>
            prevAlunos.map(aluno =>
                aluno.id === alunoId ? { ...aluno, presente: !aluno.presente } : aluno
            )
        );
    };

    const finalizarFrequencia = () => {
        const presencas = alunos.filter(a => a.presente).map(a => a.id);
        const faltas = alunos.filter(a => !a.presente).map(a => a.id);
        
        console.log(`Frequência da turma ${turma} finalizada. Presentes:`, presencas);
        console.log("Faltas:", faltas);

        alert(`Frequência da turma ${turma} finalizada com sucesso!`);
        setAlunos(prevAlunos => prevAlunos.map(aluno => ({...aluno, presente: false })));
    };

    const cancelarFrequencia = () => {
        alert("Frequência cancelada. As presenças não foram salvas.");
        setAlunos(prevAlunos => prevAlunos.map(aluno => ({...aluno, presente: false })));
    };

    const renderAlunoItem = ({ item }) => (
        <View style={styles.alunoItem}>
            <Text style={styles.alunoNome}>{item.nome}</Text>
            <Checkbox
                style={styles.checkbox}
                value={item.presente}
                onValueChange={() => togglePresenca(item.id)}
                color={item.presente ? Colors.ACTION_BLUE : Colors.DARK_TEXT}
            />
        </View>
    );

    return (
        <LinearGradient 
            colors={[Colors.BACKGROUND_GRADIENT_START, Colors.BACKGROUND_GRADIENT_END]} 
            style={GlobalStyles.gradient}
        >
            <SafeAreaView style={GlobalStyles.safeContainer}>
                
                {/*cabecalho*/}
                <AdmHeader 
                    title={`${turma}`} 
                    iconName="list"
                />
                
                {/*bloco com a lista de alunos*/}
                <View style={styles.cardListaContainer}>
                    <FlatList
                        data={alunos}
                        renderItem={renderAlunoItem}
                        keyExtractor={item => item.id}
                        contentContainerStyle={styles.listContent}
                        ListHeaderComponent={() => (
                            <View style={styles.listHeader}>
                                <Text style={styles.headerText}>ALUNO(A)</Text>
                                <Text style={styles.headerText}>PRESENÇA</Text>
                            </View>
                        )}
                    />
                </View>

                {/*botoes de acao*/}
                <View style={styles.actionButtonsContainer}>
                    <TouchableOpacity
                        style={[styles.actionButton, { backgroundColor: Colors.BUTTON_SUCCESS }]}
                        onPress={finalizarFrequencia}
                    >
                        <Text style={styles.actionButtonText}>Finalizar Frequência</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.actionButton, { backgroundColor: Colors.BUTTON_DANGER }]}
                        onPress={cancelarFrequencia}
                    >
                        <Text style={styles.actionButtonText}>Cancelar Frequência</Text>
                    </TouchableOpacity>
                </View>

                {/*botao voltar*/}
                <TouchableOpacity 
                    style={GlobalStyles.btnBottom} 
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={width * 0.05} color={Colors.LIGHT_TEXT} />
                    <Text style={GlobalStyles.btnBottomText}>Voltar</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    cardListaContainer: {
        width: "100%",
        height: height * 0.55,
        backgroundColor: Colors.HEADER_CARD_BG,
        borderRadius: CardStyles.cardOverlapContainer.borderRadius || 15,
        paddingHorizontal: width * 0.08,
        paddingTop: 10,
        marginTop: height * 0.025,
        marginBottom: height * 0.02,
        alignSelf: 'center', 
    },
    listContent: {
        paddingBottom: 20,
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: Colors.BORDER_GREY || '#ccc',
        marginBottom: 5,
    },
    headerText: {
        fontWeight: 'bold',
        color: Colors.DARK_TEXT,
        fontSize: width * 0.04,
    },
    alunoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: Colors.BORDER_GREY || '#eee',
    },
    alunoNome: {
        fontSize: width * 0.04,
        color: Colors.DARK_TEXT,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: Colors.DARK_TEXT,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignSelf: 'center',
        marginBottom: height * 0.01,
    },
    actionButton: {
        paddingVertical: 12,
        borderRadius: 10,
        width: '47%',
        alignItems: 'center',
        elevation: 3,
    },
    actionButtonText: {
        color: Colors.LIGHT_TEXT,
        fontWeight: 'bold',
        fontSize: width * 0.035,
    },
});