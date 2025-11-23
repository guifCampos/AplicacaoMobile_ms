//aqui contem os estilos comuns do app
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

//paleta de cores do app
export const Colors = {
    PRIMARY_BLUE: '#02416d',                //azul escuro para o topo do gradiente
    SECONDARY_BLUE: '#0a7cb9ff',            //azul claro para o restante do gradiente
    BACKGROUND_GRADIENT_START: '#02416d',   //comeco do gradiente do background geral (ainda mantido para consistencia)
    BACKGROUND_GRADIENT_END: '#0a7cb9ff',   //fim do gradiente do background geral
    HEADER_BG_BLUE: '#0F69C8',              //cor de fundo do cabecalho azul
    HEADER_CARD_BG: '#FFF',                 //fundo de cards e formularios
    DARK_TEXT: '#003A5A',                   //cor principal de texto escuro
    LIGHT_TEXT: '#FFF',                     //cor principal de texto claro
    ACTION_BLUE: '#0F69C8',                 //azul para botoes de acao e icones
    BACK_BUTTON_BG: '#003554',              //fundo do botao voltar
    EXIT_BUTTON_BG: '#0D4B6C',              //fundo do botao sair
    BUTTON_SUCCESS: '#0F69C8',              //para acoes positivas
    BUTTON_DANGER: '#D9534F',               //cor para acoes de perigo/sair
    BORDER_GREY: '#E0E0E0',                 //cor de borda clara
    PLACEHOLDER_TEXT: '#888',               //cor para texto de placeholder
};

//estilo de layout comum do app
export const GlobalStyles = StyleSheet.create({
    //estilo de preenchimento de tela cheia para o LinearGradient
    gradient: {
        flex: 1,
    },
    //safe area do app
    safeContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: width * 0.05,
        alignItems: 'center',
    },
    //estilo do botao voltar ou sair
    btnBottom: { 
        width: '90%',
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: Colors.BACK_BUTTON_BG, 
        paddingVertical: 14, 
        borderRadius: 30,
        marginTop: 20,
        marginBottom: 10,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    btnBottomText: { 
        color: Colors.LIGHT_TEXT, 
        fontSize: width * 0.045,
        fontWeight: 'bold',
        marginLeft: 8,
    },
});

//estilo do card azul (parte que contem o logo e o nome da escolinha)
export const HeaderStyles = StyleSheet.create({
    headerContainer: {
        width: '100%',
        backgroundColor: Colors.HEADER_BG_BLUE,
        paddingTop: height * 0.02,
        paddingBottom: height * 0.02,
        borderTopRightRadius: 18,
        borderTopLeftRadius: 18,
        alignItems: 'center',
        marginTop: (height * 0.02),
        marginBottom: - (height * 0.03),
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    headerContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    logo: {
        width: width * 0.18,
        height: width * 0.18,
        marginRight: width * 0.03,
        marginBottom: 21,
        resizeMode: 'contain',
    },
    textHeader: {
        flexDirection: "column",
    },
    nomeEscolinha: {
        color: Colors.LIGHT_TEXT,
        fontSize: width * 0.05,
        fontWeight: "bold",
    },
    subtitulo: {
        color: Colors.LIGHT_TEXT,
        fontSize: width * 0.04,
        marginBottom: 21,
    },
});

//estilo do card branco (este contem os titulos das telas e o boas vindas com o nome do usuario no menu)
export const CardStyles = StyleSheet.create({
    //container para o card branco (ele esta sobreposto ao cabecalho azul)
    cardOverlapContainer: {
        width: '100%',
        zIndex: 1,
    },
    //estilo para o WelcomeCard (Menu Admin)
    welcomeCard: {
        width: '100%',
        backgroundColor: Colors.HEADER_CARD_BG,
        borderRadius: 18,
        paddingVertical: height * 0.03,
        paddingHorizontal: width * 0.05,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        alignItems: 'center',
    },
    //texto de boas vindas
    welcomeText: {
        fontSize: width * 0.05,
        fontWeight: '700',
        color: Colors.DARK_TEXT,
        marginBottom: 5,
    },
    //nome do usuario
    userNameText: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        color: Colors.ACTION_BLUE,
        marginBottom: height * 0.02,
    },
    //estilo para o ListTitleCard (usado no AdmHeader)
    listTitleCard: {
        width: '100%',
        backgroundColor: Colors.HEADER_CARD_BG,
        borderRadius: 18,
        paddingVertical: height * 0.03,
        paddingHorizontal: width * 0.05,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    //texto do titulo "Lista de Alunos"
    listTitleText: {
        fontSize: width * 0.055,
        fontWeight: "bold",
        color: Colors.DARK_TEXT,
        marginLeft: width * 0.03,
    },
});

//estilos dos botoes de navegacao no menu (Alunos, Frequencia, Faturamento)
export const OptionButtonStyles = StyleSheet.create({
    buttonRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: width * 0.01,
        marginBottom: height * 0.02,
    },
    optionButtonContainer: {
        flex: 1,
        marginHorizontal: width * 0.025,
        backgroundColor: Colors.HEADER_CARD_BG,
        borderRadius: 18,
        paddingVertical: height * 0.02,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
    },
    optionIcon: {
        fontSize: width * 0.1,
        color: Colors.ACTION_BLUE,
        marginBottom: height * 0.01,
    },
    optionText: {
        fontSize: width * 0.035,
        fontWeight: 'bold',
        color: Colors.DARK_TEXT,
        textAlign: 'center',
        lineHeight: width * 0.04,
    },
});

//estilo da lista de aniversariantes
export const BirthdaySectionStyles = StyleSheet.create({
    birthdaySection: {
        width: '95%',
        backgroundColor: Colors.ACTION_BLUE,
        borderRadius: 18,
        padding: height * 0.02,
        marginTop: height * 0.03,
        marginBottom: height * 0.03,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    birthdayTitle: {
        color: Colors.LIGHT_TEXT,
        fontWeight: 'bold',
        fontSize: width * 0.045,
        textAlign: 'center',
        marginBottom: height * 0.015,
    },
    birthdayList: {
        backgroundColor: Colors.LIGHT_TEXT,
        borderRadius: 12,
        padding: height * 0.02,
        minHeight: height * 0.15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    birthdayPlaceholder: {
        color: Colors.PLACEHOLDER_TEXT,
        fontStyle: 'italic',
        fontSize: width * 0.04,
    },
});

//estilo dos cards dos alunos (na tela AdmListaAlunos)
export const AlunoCardStyles = StyleSheet.create({
    cardAluno: { 
        backgroundColor: Colors.HEADER_CARD_BG, 
        borderRadius: 15, 
        padding: 15, 
        marginBottom: 10,
        borderLeftWidth: 15,
        borderLeftColor: Colors.ACTION_BLUE,
        elevation: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 2,
    },
    alunoInfoContainer: {
        flexDirection: "row", 
        alignItems: "center",
        marginBottom: 10,
    },
    alunoIcon: {
        marginRight: 10,
    },
    alunoDetailsText: {
        fontSize: width * 0.038,
        color: Colors.DARK_TEXT,
    },
    alunoNome: {
        fontWeight: "bold", 
        fontSize: width * 0.045,
    },
    statusText: {
        fontSize: width * 0.035,
        fontWeight: 'bold',
        marginTop: 5
    },
    emDia: {
        color: 'green',
    },
    atrasado: {
        color: Colors.BUTTON_DANGER,
    },
    acoesContainer: { 
        flexDirection: "row", 
        flexWrap: "wrap", 
        justifyContent: "space-between", 
        marginTop: 15,
        borderTopWidth: 1,
        borderTopColor: Colors.BORDER_GREY,
        paddingTop: 10
    },
    btnAcao: { 
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: 'center',
        gap: 5, 
        marginVertical: 4,
        marginHorizontal: 4, 
        padding: 10, 
        borderWidth: 1, 
        borderColor: Colors.ACTION_BLUE, 
        borderRadius: 8,
        flexGrow: 1,
        width: '30%',
        backgroundColor: Colors.LIGHT_TEXT,
    },
    btnAcaoTexto: { 
        fontSize: width * 0.033, 
        color: Colors.DARK_TEXT,
        fontWeight: '500'
    },
    //botao apagar
    btnAcaoDangerText: {
        color: Colors.BUTTON_DANGER,
    },
    btnAcaoDangerBorder: {
        borderColor: Colors.BUTTON_DANGER,
    },
});

//estilo do mais detalhes do aluno (card que aparece ao clicar em "Mais Detalhes")
export const ModalStyles = StyleSheet.create({
    modalContainer: { 
        flex: 1, 
        backgroundColor: "rgba(0,0,0,0.5)", 
        justifyContent: "center", 
        alignItems: "center" 
    },
    modalBox: { 
        width: width * 0.85, 
        backgroundColor: Colors.HEADER_CARD_BG, 
        borderRadius: 15, 
        padding: 20,
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    modalTitle: { 
        fontSize: width * 0.06, 
        fontWeight: "bold", 
        color: Colors.DARK_TEXT, 
        marginBottom: 15, 
        textAlign: 'center' 
    },
    modalText: {
        fontSize: width * 0.04,
        color: Colors.DARK_TEXT,
        marginBottom: 5,
    },
    modalTextBold: {
        fontWeight: '600',
    },
    modalStatusText: {
        fontSize: width * 0.04,
        fontWeight: 'bold',
    },
    modalAcoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: Colors.BORDER_GREY,
    },
    modalActionButton: {
        backgroundColor: Colors.ACTION_BLUE,
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        gap: 5,
    },
    modalActionButtonText: {
        color: Colors.LIGHT_TEXT,
        fontWeight: 'bold',
        fontSize: width * 0.038,
    },
    modalCloseButton: {
        backgroundColor: Colors.BUTTON_DANGER,
        padding: 12,
        borderRadius: 10,
        marginTop: 20,
        alignItems: 'center'
    },
    modalCloseButtonText: {
        color: Colors.LIGHT_TEXT,
        fontWeight: 'bold',
        fontSize: width * 0.045,
    }
});