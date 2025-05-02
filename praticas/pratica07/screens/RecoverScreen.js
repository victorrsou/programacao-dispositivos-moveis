import { TextInput, View } from "react-native";

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