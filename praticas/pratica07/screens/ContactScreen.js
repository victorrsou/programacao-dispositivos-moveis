import { View, StyleSheet } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";

function ContactScreen({ navigation }) {
    return (
        <View>
            <View style={styles.containerContatos}>
                <FAB icon="avatar" />
                <View>
                    <Text>Nome do Contato</Text>
                    <Text>(99) 99999-9999</Text>
                </View>
            </View>
            <View style={styles.containerContatos}>
                <FAB icon="avatar" />
                <View>
                    <Text>Nome do Contato</Text>
                    <Text>(99) 99999-9999</Text>
                </View>
            </View>
            <View style={styles.containerContatos}>
                <FAB icon="avatar" />
                <View>
                    <Text>Nome do Contato</Text>
                    <Text>(99) 99999-9999</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    containerContatos: {
        flexDirection: "row",
    }
})

export default ContactScreen;