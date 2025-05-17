import { View } from "react-native";
import { HelperText, TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { Controller } from "react-hook-form";


function ForgotPasswordScreen() {
    const [email, setEmail] = useState("");
    const [erro, setErro] = useState("");

    const { control, handleSubmit, formState: { errors } } = useForm() 

    const validarEmail = () => {
        if (!email) {
            setErro("E-mail é obrigatório.");
        } else if (!email.includes("@")) {
            setErro("E-mail inválido.");
        } else {
            setErro("");
            alert("Instruções enviadas para o e-mail!");
        }
    }


    return (
        <View style={{flex: 1, padding: 16}}>
            <Controller
                control={control}
                name="email"
                render={() => {
                    <TextInput
                        label="E-mail"
                        mode="outlined"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                        error={!!erro}
                    />
                }}
            />
            <HelperText
                type="error"
                visible={errors.email}
            >
                {errors.email?.message}
            </HelperText>
            <Button
                mode="contained"
                style={""}
                onPress={validarEmail()}
            >Enviar</Button>
            <Button
                style={""}
                onPress={() => {}}
            >Voltar para o Login</Button>

        </View>
    )
}

export default ForgotPasswordScreen;