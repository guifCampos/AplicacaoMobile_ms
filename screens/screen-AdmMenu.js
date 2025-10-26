import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons"; //bibliotecas de icones 

import { GlobalStyles, Colors, OptionButtonStyles, BirthdaySectionStyles, HeaderStyles } from '../screens/stylesCommon';
import { MainHeader, WelcomeCard } from '../screens/components'; 


const { width, height } = Dimensions.get('window');


export default function MenuAdmin({ navigation }) {

    //navegacao entre as telas
    const navigateToScreen = (screenName) => {
        navigation.navigate(screenName);
    };

    return (
        <LinearGradient colors={[Colors.PRIMARY_BLUE, Colors.SECONDARY_BLUE]} style={GlobalStyles.gradient}>
            <SafeAreaView style={GlobalStyles.safeContainer}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    

                    {/*AQUI POSSIVELMENTE ESTA O ERRO/BUG (MAINHEADER OU WELCOMECARD): 
                        Console ERROR
                        Text string must be rendered within a <Text> component.
                    */}
                    <MainHeader/>
                    {/*card com o boas vindas e o nome do usuario*/}
                    <WelcomeCard userName="ADMINISTRADOR"> {/*LEMBRETE --> tornar dinamico*/}
                       <Text userName="ADMINISTRADOR"/>
                    </WelcomeCard>
                    {/*botoes de navegacao*/}
                    <View style={styles.buttonSection}>
                        <View style={styles.tresbotoesalinhados}>
                                {/*botao alunos */}
                                <TouchableOpacity style={[styles.optionButton, {backgroundColor: '#fff'}]} onPress={() => navigateToScreen('Alunos')}>
                                    <Ionicons name="people" style={OptionButtonStyles.optionIcon} />
                                    <Text style={OptionButtonStyles.optionText}>Lista de{"\n"}Alunos</Text>
                                </TouchableOpacity>

                                {/*botao frequencias*/}
                                <TouchableOpacity style={[styles.optionButton, {backgroundColor: '#fff'}]} onPress={() => navigateToScreen('Frequencias')}>
                                    <MaterialCommunityIcons name="calendar-check" style={OptionButtonStyles.optionIcon} />
                                    <Text style={OptionButtonStyles.optionText}>Lista de{"\n"}Frequências</Text>
                                </TouchableOpacity>
                                
                                {/*botao para faturamento*/}
                                <TouchableOpacity style={[styles.optionButton, {backgroundColor: '#fff'}]} onPress={() => console.log('Navegar para Faturamento')}>
                                    <FontAwesome5 name="money-bill-wave" style={OptionButtonStyles.optionIcon} />
                                    <Text style={OptionButtonStyles.optionText}>Faturamento{"\n"}(Em Breve)</Text>
                                </TouchableOpacity>
                        </View>
                    </View>
                    
                    {/*lista de aniversariantes*/}
                    <View style={BirthdaySectionStyles.birthdaySection}>
                        <Text style={BirthdaySectionStyles.birthdayTitle}>🥳🎉 Aniversariantes do Mês 🥳🎉</Text>
                        <View style={BirthdaySectionStyles.birthdayList}>
                            <Text style={BirthdaySectionStyles.birthdayPlaceholder}>Nenhum aniversariante cadastrado ainda</Text>
                        </View>
                    </View>

                </ScrollView>

                {/*botao SAIR*/}
                <TouchableOpacity style={[GlobalStyles.btnBottom, { backgroundColor: Colors.BUTTON_DANGER, marginBottom: height * 0.02 }]} onPress={() => navigation.replace('Login')}>
                    <Ionicons name="log-out-outline" size={width * 0.06} color={Colors.LIGHT_TEXT} />
                    <Text style={GlobalStyles.btnBottomText}>Sair</Text>
                </TouchableOpacity>

            </SafeAreaView>
        </LinearGradient>
    );
}

//estilos unicos da tela MenuAdmin
const styles = StyleSheet.create({
    scrollViewContent: {
        alignItems: 'center', 
        paddingBottom: height * 0.03, 
        flexGrow: 1,
    },
    buttonSection: {
        width: '100%',
        marginTop: height * 0.03,
    },
    //alinha os 3 botoes para a navegacao das telas
    tresbotoesalinhados: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
        paddingHorizontal: 6,
    },
    optionButton: {
        flex: 1, 
        marginHorizontal: 4,
        backgroundColor: Colors.HEADER_CARD_BG,
        borderRadius: 18,
        paddingVertical: 18,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
});
