import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function MeuComponente() {
  return (
    <Text style={{paddingTop: 40, fontSize: 54, color: "white"}}>Olá, Turma!</Text>
  )
}

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: "blue"}}>
      <MeuComponente />
      <StatusBar style="auto" />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
