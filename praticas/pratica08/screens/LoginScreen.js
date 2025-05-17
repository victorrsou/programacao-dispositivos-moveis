import { TouchableOpacity, View } from "react-native";
import { TextInput, HelperText, Button } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";

function LoginScreen() {
    const { control, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        alert("Login realizado com sucesso!")
    }

    return (
        <View style={{flex: 1, padding: 16 }}>
            <Controller
                control={control}
                name="email"
                rules={{required: "E-mail é obrigatório"}}
                render={({field: {onChange, value}}) => {
                    <TextInput
                        label="E-mail"
                        mode="outlined"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={value}
                        onChangeText={onChange}
                        error={!!errors.email}
                    />
                }}
            />
            <HelperText
                type="error"
                visible={errors.email}
            >
                {errors.email?.message}
            </HelperText>
            <Controller
                control={control}
                name="senha"
                rules={{required: "Senha é obrigatória", minLength: {value: 6, message: "Senha deve ter no mínimo 6 caracteres"}}}
                render={({field: {onChange, value}}) => {
                    <TextInput
                        label="Senha"
                        mode="outlined"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                        error={!!errors.senha}
                    />
                }}
            />
            <HelperText
                type="error"
                visible={errors.senha}
            >
                {errors.senha?.message}
            </HelperText>
            <Button
                mode="contained"
                style={""}
                onPress={handleSubmit(onSubmit)}
            >Entrar</Button>
            <Button
                style={""}
                onPress={() => {}}
            >Esqueceu sua senha? Recuperar senha</Button>
            <Button
                style={""}    
                onPress={() => {}}
            >Criar Conta</Button>
        </View>
    )
}

export default LoginScreen;