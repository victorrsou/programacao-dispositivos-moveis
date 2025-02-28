import { Text, View, StyleSheet } from "react-native";


function App() {
  return (
    <View style={styles.container}>
            <Appbar titulo="Minha Aplicação React Native" />
            <View></View>
        </View>
    );
  }

  const styles = StyleSheet.create({
      container: {
          flex: 1,
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
      },
      appBar: {
          height: 50,
          backgroundColor: "#333",
          justifyContent: "center",
          paddingLeft: 16,
      },
      title: {
          fontSize: 20,
          fontWeight: "bold",
          color: "#fff",
      },
  });

function Appbar(props) {
    return (
        <View style={styles.appBar}>
            <Text style={styles.title}>
                {props.titulo}
            </Text>
        </View>
    );
}

export default App;
