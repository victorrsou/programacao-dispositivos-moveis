import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import ForgotPasswordScreen from "../screens/ForgotPasswordScreen";
import SignUpScreen from "../screens/SignUpScreen";

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <StackNavigator initialRouteName="Login">
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="RecuperarSenha" component={ForgotPasswordScreen} />
            <Stack.Screen name="CriarConta" component={SignUpScreen} />
        </StackNavigator>
    )
}

export default StackNavigator;