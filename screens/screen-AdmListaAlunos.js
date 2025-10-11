import React, { useState, useMemo } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, Dimensions, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

import { GlobalStyles, Colors, AlunoCardStyles, ModalStyles } from '../screens/stylesCommon'; 
import { AdmHeader } from '../screens/components';

const { width, height } = Dimensions.get("window");

//filtros fixos
const FIXED_MENSALIDADE_OPTIONS = ["Em dia", "Atrasado"];
const FIXED_CONTA_OPTIONS = ["Ativa", "Desativada"];
const FIXED_TURMA_OPTIONS = ["Sub 05", "Sub 07", "Sub 09", "Sub 11", "Sub 13"];
const FIXED_SORT_OPTIONS = ["A-Z", "Z-A"];

export default function MenuADM_Alunos({ navigation }) {
    const [filterVisible, setFilterVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedAluno, setSelectedAluno] = useState(null);

    //estado de filtros ativos
    const [activeFilters, setActiveFilters] = useState({
        status: [], //mensalidade
        turma: [], 
        statusAluno: [], //conta
    });
    
    const [sortOrder, setSortOrder] = useState(null); 

    //exemplo de dados de alunos
    const alunos = [
        { id: "1", nome: "João Pedro", resp: "Carlos Pedro", turma: "Sub 11", status: "Em dia", frequencia: "87%", endereco: "Rua A, 123 - Centro", statusAluno: "Ativa" },
        { id: "2", nome: "Rafael Santos", resp: "Joana Santos", turma: "Sub 09", status: "Atrasado", frequencia: "72%", endereco: "Rua B, 23 - Bairro Sudeste", statusAluno: "Ativa" },
        { id: "3", nome: "Maria Silva", resp: "Ana Silva", turma: "Sub 13", status: "Em dia", frequencia: "93%", endereco: "Rua B, 51 - Bairro Sudeste", statusAluno: "Desativada" },
        { id: "4", nome: "Lucas Lima", resp: "Pedro Lima", turma: "Sub 07", status: "Atrasado", frequencia: "100%", endereco: "Rua G, 21 - Zona Sul", statusAluno: "Ativa" },
        { id: "5", nome: "Ana Costa", resp: "Paulo Costa", turma: "Sub 05", status: "Em dia", frequencia: "80%", endereco: "Rua E, 202 - Bairro", statusAluno: "Desativada" },
        { id: "6", nome: "Beto Souza", resp: "Marta Souza", turma: "Sub 11", status: "Atrasado", frequencia: "90%", endereco: "Rua F, 303 - Bairro", statusAluno: "Ativa" },
    ];


    //filtro para multipla selecao
    const toggleFilter = (category, value) => {
        setActiveFilters(prevFilters => {
            const currentList = prevFilters[category];
            if (currentList.includes(value)) {
                return {
                    ...prevFilters,
                    [category]: currentList.filter(item => item !== value),
                };
            } else {
                return {
                    ...prevFilters,
                    [category]: [...currentList, value],
                };
            }
        });
    };
    
    //filtro para unica selecao (ordenacao)
    const toggleSort = (orderValue) => {
        setSortOrder(prevOrder => (prevOrder === orderValue ? null : orderValue));
    };
    
    //limpa os filtros
    const handleClearFilters = () => {
        setActiveFilters({
            status: [],
            turma: [],
            statusAluno: [],
        });
        setSortOrder(null);
    };

    const handleApplyFilters = () => {
        setFilterVisible(false);
    };


    const filteredAlunos = useMemo(() => {
        let currentList = alunos;
    
        //filtros por status da mensalidade, turma e status da conta do aluno
        currentList = currentList.filter(aluno => {
            const statusMatch = activeFilters.status.length === 0 || activeFilters.status.includes(aluno.status);
            const turmaMatch = activeFilters.turma.length === 0 || activeFilters.turma.includes(aluno.turma);
            const statusAlunoMatch = activeFilters.statusAluno.length === 0 || activeFilters.statusAluno.includes(aluno.statusAluno);
            
            return statusMatch && turmaMatch && statusAlunoMatch;
        });
        
        //ordenacaoo alfabetica
        if (sortOrder === 'A-Z') {
            currentList.sort((a, b) => a.nome.localeCompare(b.nome));
        } else if (sortOrder === 'Z-A') {
            currentList.sort((a, b) => b.nome.localeCompare(a.nome));
        }

        return currentList;
    }, [alunos, activeFilters, sortOrder]);

    
    //card de cada aluno na lista
    const renderAluno = ({ item }) => (
        <View style={AlunoCardStyles.cardAluno}>
            <View style={AlunoCardStyles.alunoInfoContainer}>
                <Ionicons name="person-circle-outline" size={width * 0.12} color={Colors.DARK_TEXT} style={AlunoCardStyles.alunoIcon} />
                <View>
                    {/*nome do aluno*/}
                    <Text style={[AlunoCardStyles.alunoDetailsText, AlunoCardStyles.alunoNome]}>{item.nome}</Text>
                    
                    {/*nome do responsavel pelo aluno*/}
                    <Text style={AlunoCardStyles.alunoDetailsText}>Responsável: {item.resp}</Text>

                    {/*turma do aluno*/}
                    <Text style={AlunoCardStyles.alunoDetailsText}>Turma: {item.turma}</Text>

                    {/*status da mensalidade se em dia ou atrasada*/}
                    <Text style={[AlunoCardStyles.statusText, item.status === "Em dia" ? AlunoCardStyles.emDia : AlunoCardStyles.atrasado]}>
                        Mensalidade: {item.status}
                    </Text>

                    {/*status da conta se ativa ou desativada*/}
                    <Text style={[AlunoCardStyles.statusText, item.statusAluno === "Ativa" ? styles.ativa : styles.desativada]}>
                        Conta: {item.statusAluno}
                    </Text>
                </View>
            </View>
            
            <View style={AlunoCardStyles.acoesContainer}>
                {/*botao para ver mais detalhes do aluno*/}
                <TouchableOpacity style={AlunoCardStyles.btnAcao} onPress={() => { setSelectedAluno(item); setModalVisible(true); }}>
                    <Ionicons name="eye" size={width * 0.045} color={Colors.ACTION_BLUE} />
                    <Text style={AlunoCardStyles.btnAcaoTexto}>Detalhes</Text>
                </TouchableOpacity>

                {/*botao para editar dados do aluno*/}
                <TouchableOpacity style={AlunoCardStyles.btnAcao} onPress={() => console.log('Editar ' + item.nome)}>
                    <Ionicons name="create" size={width * 0.045} color={Colors.ACTION_BLUE} />
                    <Text style={AlunoCardStyles.btnAcaoTexto}>Editar</Text>
                </TouchableOpacity>

                {/*botao para apagar o aluno*/}
                <TouchableOpacity style={[AlunoCardStyles.btnAcao, AlunoCardStyles.btnAcaoDangerBorder]} onPress={() => console.log('Apagar ' + item.nome)}>
                    <Ionicons name="trash" size={width * 0.045} color={Colors.BUTTON_DANGER} />
                    <Text style={[AlunoCardStyles.btnAcaoTexto, AlunoCardStyles.btnAcaoDangerText]}>Apagar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <LinearGradient colors={[Colors.BACKGROUND_GRADIENT_START, Colors.BACKGROUND_GRADIENT_END]} style={GlobalStyles.gradient}>
            <SafeAreaView style={GlobalStyles.safeContainer}>
                
                <AdmHeader title="Lista de Alunos" iconName="people-sharp" />
                
                <View style={styles.contentContainer}>
                    <View style={styles.topButtonsContainer}>
                        {/*botao para adicionar aluno manualmente*/}
                        <TouchableOpacity style={styles.addButton} onPress={() => console.log('Adicionar Aluno')}>
                            <Ionicons name="person-add" size={width * 0.05} color={Colors.LIGHT_TEXT} />
                            <Text style={styles.addButtonText}>Adicionar</Text>
                        </TouchableOpacity>

                        {/*botao para abrir os filtros*/}
                        <TouchableOpacity style={styles.filterButton} onPress={() => setFilterVisible(true)}>
                            <Ionicons name="funnel-outline" size={width * 0.05} color={Colors.LIGHT_TEXT} />
                        </TouchableOpacity>
                    </View>

                    {/*lista de alunos*/}
                    <FlatList
                        data={filteredAlunos}
                        renderItem={renderAluno}
                        keyExtractor={(item) => item.id}
                        style={{ width: '100%' }}
                        contentContainerStyle={{ paddingBottom: height * 0.02 }}
                    />
                </View>

                {/*botao voltar*/}
                <TouchableOpacity style={GlobalStyles.btnBottom} onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={width * 0.05} color={Colors.LIGHT_TEXT} />
                    <Text style={GlobalStyles.btnBottomText}>Voltar</Text>
                </TouchableOpacity>

            </SafeAreaView>

            
            {/*modal de filtros*/}
            <Modal
                animationType="fade"
                transparent={true}
                visible={filterVisible}
                onRequestClose={() => setFilterVisible(false)}
            >
                <View style={ModalStyles.modalContainer}>
                    <View style={[ModalStyles.modalBox, styles.modalFilterBox]}> 
                        <Text style={ModalStyles.modalTitle}>Opções de Filtro e Ordenação</Text>
                        
                        <ScrollView style={styles.filterScrollView}>

                            {/*filtro de ordem alfabetica*/}
                            <View style={styles.filterGroup}>
                                <Text style={styles.filterTitle}>Ordem Alfabética</Text>
                                
                                {FIXED_SORT_OPTIONS.map(order => (
                                    <TouchableOpacity
                                        key={order}
                                        style={styles.filterOption}
                                        onPress={() => toggleSort(order)}
                                    >
                                        <Checkbox 
                                            style={styles.checkbox}
                                            value={sortOrder === order} 
                                            onValueChange={() => toggleSort(order)}
                                            color={sortOrder === order ? Colors.ACTION_BLUE : Colors.BORDER_GREY}
                                        />
                                        <Text style={{ color: Colors.DARK_TEXT }}>{order}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            {/*filtro por status de pagamento da mensalidade*/}
                            <View style={styles.filterGroup}>
                                <Text style={styles.filterTitle}>Filtrar por Mensalidade:</Text>
                                {FIXED_MENSALIDADE_OPTIONS.map(status => (
                                    <TouchableOpacity
                                        key={status}
                                        style={styles.filterOption}
                                        onPress={() => toggleFilter('status', status)}
                                    >
                                        <Checkbox 
                                            style={styles.checkbox}
                                            value={activeFilters.status.includes(status)}
                                            onValueChange={() => toggleFilter('status', status)}
                                            color={activeFilters.status.includes(status) ? Colors.ACTION_BLUE : Colors.BORDER_GREY}
                                        />
                                        <Text style={{ color: Colors.DARK_TEXT }}>{status}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                            
                            {/*filtro por contas ativas e inativas*/}
                            <View style={styles.filterGroup}>
                                <Text style={styles.filterTitle}>Filtrar por Status da Conta:</Text>
                                {FIXED_CONTA_OPTIONS.map(statusConta => (
                                    <TouchableOpacity
                                        key={statusConta}
                                        style={styles.filterOption}
                                        onPress={() => toggleFilter('statusAluno', statusConta)}
                                    >
                                        <Checkbox 
                                            style={styles.checkbox}
                                            value={activeFilters.statusAluno.includes(statusConta)}
                                            onValueChange={() => toggleFilter('statusAluno', statusConta)}
                                            color={activeFilters.statusAluno.includes(statusConta) ? Colors.ACTION_BLUE : Colors.BORDER_GREY}
                                        />
                                        <Text style={{ color: Colors.DARK_TEXT }}>{statusConta}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            {/*filtro por turma*/}
                            <View style={styles.filterGroup}>
                                <Text style={styles.filterTitle}>Filtrar por Turma:</Text>
                                {FIXED_TURMA_OPTIONS.map(turma => (
                                    <TouchableOpacity
                                        key={turma}
                                        style={styles.filterOption}
                                        onPress={() => toggleFilter('turma', turma)}
                                    >
                                        <Checkbox 
                                            style={styles.checkbox}
                                            value={activeFilters.turma.includes(turma)}
                                            onValueChange={() => toggleFilter('turma', turma)}
                                            color={activeFilters.turma.includes(turma) ? Colors.ACTION_BLUE : Colors.BORDER_GREY}
                                        />
                                        <Text style={{ color: Colors.DARK_TEXT }}>{turma}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </ScrollView>
                        
                        {/*botoes do modal de filtro*/}
                        <View style={styles.modalButtons}>
                            <TouchableOpacity style={[styles.modalButton, { backgroundColor: Colors.BUTTON_DANGER }]} onPress={handleClearFilters}>
                                <Text style={styles.modalButtonText}>Limpar Filtros</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.modalButton, { backgroundColor: Colors.ACTION_BLUE }]} onPress={handleApplyFilters}>
                                <Text style={styles.modalButtonText}>Aplicar Filtros</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/*modal de mais detalhes do aluno*/}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={ModalStyles.modalContainer}>
                    <View style={ModalStyles.modalBox}>
                        <Text style={ModalStyles.modalTitle}>Detalhes do Aluno</Text>
                        {selectedAluno && (
                            <View>
                                <Text style={ModalStyles.modalText}>Nome: <Text style={ModalStyles.modalTextBold}>{selectedAluno.nome}</Text></Text>
                                <Text style={ModalStyles.modalText}>Responsável: <Text style={ModalStyles.modalTextBold}>{selectedAluno.resp}</Text></Text>
                                <Text style={ModalStyles.modalText}>Turma: <Text style={ModalStyles.modalTextBold}>{selectedAluno.turma}</Text></Text>
                                <Text style={ModalStyles.modalText}>Mensalidade: 
                                    <Text style={[ModalStyles.modalTextBold, selectedAluno.status === "Em dia" ? AlunoCardStyles.emDia : AlunoCardStyles.atrasado]}>
                                        {" "}{selectedAluno.status}
                                    </Text>
                                </Text>
                                <Text style={ModalStyles.modalText}>Frequência: <Text style={ModalStyles.modalTextBold}>{selectedAluno.frequencia}</Text></Text>
                                <Text style={ModalStyles.modalText}>Endereço: <Text style={ModalStyles.modalTextBold}>{selectedAluno.endereco}</Text></Text>
                                <Text style={ModalStyles.modalText}>Status: 
                                    <Text style={[ModalStyles.modalTextBold, selectedAluno.statusAluno === "Ativa" ? styles.ativa : styles.desativada]}>
                                        {" "}{selectedAluno.statusAluno}
                                    </Text>
                                </Text>
                                
                                <View style={ModalStyles.modalAcoes}>
                                    <TouchableOpacity style={ModalStyles.modalActionButton} onPress={() => console.log("Ligar para Responsável")}>
                                        <Ionicons name="call" size={width * 0.05} color={Colors.LIGHT_TEXT} />
                                        <Text style={ModalStyles.modalActionButtonText}>Ligar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={ModalStyles.modalActionButton} onPress={() => console.log("Enviar Mensagem")}>
                                        <Ionicons name="chatbubbles" size={width * 0.05} color={Colors.LIGHT_TEXT} />
                                        <Text style={ModalStyles.modalActionButtonText}>Mensagem</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                        <TouchableOpacity style={ModalStyles.modalCloseButton} onPress={() => setModalVisible(false)}>
                            <Text style={ModalStyles.modalCloseButtonText}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </LinearGradient>
    );
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        width: '100%',
        marginTop: height * 0.02,
    },
    topButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: height * 0.02,
        paddingHorizontal: width * 0.01,
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.ACTION_BLUE,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
        gap: 8,
    },
    addButtonText: {
        color: Colors.LIGHT_TEXT,
        fontSize: width * 0.04,
        fontWeight: 'bold',
    },
    filterButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Colors.ACTION_BLUE,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3,
    },
    modalFilterBox: {
        maxHeight: height * 0.8,
    },
    filterScrollView: {
        flexGrow: 0,
        paddingRight: 5,
    },
    //estilo dos grupos de filtros
    filterGroup: {
        backgroundColor: Colors.HEADER_CARD_BG,
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        width: '100%',
        elevation: 2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        borderWidth: 1,
        borderColor: Colors.BORDER_GREY,
    },
    filterTitle: {
        fontWeight: "bold",
        marginBottom: 8,
        marginTop: 5,
        color: Colors.DARK_TEXT,
        fontSize: width * 0.04,
    },
    filterOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 5,
    },
    checkbox: {
        marginRight: 10,
        width: 20,
        height: 20,
        borderRadius: 4,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
    },
    modalButton: {
        flex: 1,
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    modalButtonText: {
        color: Colors.LIGHT_TEXT,
        fontWeight: 'bold',
        fontSize: width * 0.04,
    },
    // Estilos de Status
    ativa: {
        color: Colors.DARK_TEXT, 
        fontWeight: 'bold',
    },
    desativada: {
        color: Colors.DARK_TEXT,
        fontWeight: 'bold',
    },
    emDia: {
        color: Colors.BUTTON_SUCCESS, 
        fontWeight: 'bold',
    },
    atrasado: {
        color: Colors.BUTTON_DANGER, 
        fontWeight: 'bold',
    },
});