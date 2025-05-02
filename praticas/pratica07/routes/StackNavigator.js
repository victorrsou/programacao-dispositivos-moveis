import {createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import RecoverScreen from "../screens/RecoverScreen";

const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (
        <StackNavigator intialRouteName="Login">
            <Stack.screen name="Login" component={LoginScreen} />
            <Stack.screen name="RecuperarSenha" component={RecoverScreen} />
        </StackNavigator>
    )
}

export default StackNavigator;