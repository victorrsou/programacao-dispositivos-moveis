import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const Stack = createNativeStackNavigator();

function NavegacaoPilha() {
    return (
        <Stack.Navigator initialRouteName="Teste">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Teste" component={Perfil} />
        </Stack.Navigator>
    );
}

export default NavegacaoPilha;
