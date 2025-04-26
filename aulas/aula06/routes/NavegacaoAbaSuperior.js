import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "../screens/Home";
import Perfil from "../screens/Perfil";

const TopBar = createMaterialTopTabNavigator();

function NavegacaoAbaSuperior() {
    return (
        <TopBar.Navigator>
            <TopBar.Screen name="Perfil" component={Perfil} />
            <TopBar.Screen name="Home" component={Home} />
        </TopBar.Navigator>
    )
}

export default NavegacaoAbaSuperior;