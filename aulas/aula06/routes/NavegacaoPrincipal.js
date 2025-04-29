import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../contexts/AuthContext";
import NavegacaoGaveta from "./NavegacaoGaveta";
import NavegacaoPilha from "./NavegacaoPilha";

function NavegacaoPrincipal() {
    const { logado } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {logado ? <NavegacaoPilha /> : <NavegacaoGaveta />}
        </NavigationContainer>
    );
}

export default NavegacaoPrincipal;
