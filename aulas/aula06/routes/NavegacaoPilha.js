import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";
import { Text, View } from "react-native";
import Login from "../screens/Login";
import Registrar from "../screens/Registrar";

const Stack = createNativeStackNavigator();

function NavegacaoPilha() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: true,
                    header: (props) => (
                        <View style={{ height: 64, backgroundColor: "blue" }}>
                            <Text style={{ fontSize: 24, color: "red" }} />
                        </View>
                    ),
                }}
            />
            <Stack.Screen name="Registrar" component={Registrar} />
        </Stack.Navigator>
    );
}

export default NavegacaoPilha;
