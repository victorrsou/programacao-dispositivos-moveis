import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import StackNavigator from "./routes/StackNavigator";
import BottomTabNavigator from "./routes/BottomTabNavigator";
import TopTabNavigator from "./routes/TopTabNavigator";
import DrawerNavigator from "./routes/DrawerNavigator";

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default App;