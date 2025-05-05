import { View, StyleSheet, Image} from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

function ProfileScreen({navigation}) {
    return (
        <View>
            <Image />
            <Text>João da Silva</Text>
            <Text>joao.silva@email.com.br</Text>
            <Text>(61) 99999-9999</Text>
            <Button title="Editar Perfil" onPress={() => {}} />
        </View>
    )
}

export default ProfileScreen;