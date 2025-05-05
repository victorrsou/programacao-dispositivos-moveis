import { View } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

function LoginScreen ({ navigation }) {
    return (
        <View>
            <Text>Login Screen</Text>
            <TextInput label="email" onChangeText={() => {}} />
            <TextInput label="senha" onChangeText={() => {}} />
            <Button title="Entrar" onPress={() => {}} />
            <Text>Esqueceu sua senha? Recuperar Senha</Text>
        </View>
    )
}

export default LoginScreen;