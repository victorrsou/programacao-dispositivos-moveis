import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import NavegacaoPilha from "./routes/NavegacaoPilha";
import { AuthProvider } from "./contexts/AuthContext";
import NavegacaoAbaInferior from "./routes/NavegacaoAbaInferior";
import NavegacaoAbaSuperior from "./routes/NavegacaoAbaSuperior";
import NavegacaoGaveta from "./routes/NavegacaoGaveta";
import Login from "./screens/Login";
import NavegacaoPrincipal from "./routes/NavegacaoPrincipal";

function App() {
    return (
        <SafeAreaProvider>
            <AuthProvider>
                <NavegacaoPrincipal />
            </AuthProvider>
        </SafeAreaProvider>
    );
}

export default App;
