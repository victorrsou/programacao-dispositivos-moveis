import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons} from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    <Drawer.Navigator
        screenOptions={({route}) => ({
            drawerIcon: ({color, size}) => {
                let iconName;
                if (route.name === "Home") {
                    iconName = "home";
                } else if (route.name === "Perfil") {
                    iconName = "person";
                }
                return <MaterialIcons name={iconName} size={size} color={color} />
            },
        })}
    >
            <Drawer.Screen name="Home" component={HomeScreen} />
            <Drawer.Screen name="Perfil" component={ProfileScreen} />
        </Drawer.Navigator>
    }

export default DrawerNavigator;