import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-web';


export default function App() {
  return (
    <SafeAreaView>
      <LinearGradient
          colors={['#16425B', '#81C3D7']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.container}
        >
        <View>
            <Image source={require('./iconEscolinhaFutsal.png')} style={styles.logo} />
            <View style={styles.actions}>

            </View>
          
        </View>
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
    width: 290,
    height: 300,
  },
  actions:{
    paddingVertical: 13,
    paddingHorizontal: 25,
    backgroundColor: '#074AA6',
    borderRadius: 25,
    width: '80%',
    elevation: 5
  },
});
