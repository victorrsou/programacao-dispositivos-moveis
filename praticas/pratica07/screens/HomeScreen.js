import { View, StyleSheet } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

function HomeScreen({navigation}) {
    return (
        <View>
            <Text>Bem-vindo ao Meu App!</Text>
            <Text>Navegue pelo menu lateral para acessar seu perfil.</Text>
        </View>
    )
}

export default HomeScreen;