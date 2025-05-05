import { View, StyleSheet } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

function RecoverScreen({ navigation }) {
    return (
        <View>
            <Text>Recover Screen</Text>
            <TextInput label="senha" onChangeText={() => {}} />
            <Button title="recuperarsenha" onPress={() => {}} />
            <Text>Voltar para o Login</Text>
        </View>
    )
}

export default RecoverScreen;