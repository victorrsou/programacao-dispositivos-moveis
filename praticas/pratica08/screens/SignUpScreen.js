import { View } from "react-native"
import { TextInput, Button, HelperText } from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup";

const schema = Yup.object().shape({
    nome: Yup.string().required("Nome é obrigatório"),
    email: Yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    senha: Yup.string().min(6, "Senha deve ter no mínimo 6 caracteres").required("Senha é obrigatória"),
    confirmarSenha: Yup.string().oneOf([Yup.ref("senha"), null], "As senhas não coincidem").required("Confirme a senha"),
});

function SignUpScreen() {

    const { control, handleSubmit, formState: { errors }, } = useForm({resolver: yupResolver(schema)});

    const onSubmit = (data) => {
        alert("Conta criada com sucesso!")
    }

    return (
       <View style={{flex: 1, padding: 16}}>
            <Controller
                control={control}
                name="nome"
                render={({field: {onChange, value}}) => {
                    <TextInput
                        label="Nome"
                        mode="outlined"
                        autoCapitalize="words"
                        value={value}
                        onChangeText={onChange}
                        error={!!errors.nome}
                    />
                }}
            />
            <HelperText
                type="error"
                visible={errors.nome}
            >
                {errors.nome?.message}
            </HelperText>
            <Controller
                control={control}
                name="email"
                render={({field: {onChange, value}}) => {
                    <TextInput
                        label="E-mail"
                        mode="outlined"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        value={value}
                        onChangeText={onChange}
                        error={!!errors.email.message}
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
            <Controller
                control={control}
                name="confirmarSenha"
                render={({field: {onChange, value}}) => {
                    <TextInput
                        label="Confirme a Senha"
                        mode="outlined"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                        error={!!errors.confirmarSenha}
                />
                }}
            />
            <HelperText
                type="error"
                visible={errors.confirmarSenha}
            >
                {errors.confirmarSenha?.message}
            </HelperText>
            <Button
                mode="outlined"
                style={""}
                onPress={handleSubmit(onSubmit)}
            >Criar</Button>
            <Button
                style={""}
                onPress={() => {}}
            >Voltar para o Login</Button>
       </View> 

    )
}

export default SignUpScreen;