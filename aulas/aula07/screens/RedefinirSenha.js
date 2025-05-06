import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";

function RedefinirSenha() {
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");

    const validaEmail = () => {
        if (!email) {
            setErro("E-mail é obrigatório");
            return false;
        }

        if (!email.includes("@")) {
            setErro("E-mail inválido");
            return false;
        }

        return true;
    };

    const trataTexto = (text) => {
        setEmail(text);
        validaEmail();
    };

    const trataEnviar = () => {
        if (!validaEmail()) {
            return;
        }
        setEmail("");
        setErro("");
        alert("E-mail enviado!");
    };

    return (
        <View style={{ flex: 1, padding: 16 }}>
            <TextInput
                autoCapitalize="none"
                keyboardType="email-address"
                label="Email"
                value={email}
                onChange={validaEmail}
                onChangeText={setEmail}
                mode="outlined"
                error={erro != ""}
            />
            <HelperText type="error" visible={erro != ""}>
                {erro}
            </HelperText>
            <Button mode="contained" onPress={trataEnviar}>
                Enviar
            </Button>
        </View>
    );
}

export default RedefinirSenha;
