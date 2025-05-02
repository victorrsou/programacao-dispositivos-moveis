import { View, StyleSheet } from "react-native";

function ChatScreen({ navigation }) {
    return (
        <View>
            <View style={styles.containerConversa}>
                <FAB icon="avatar" />
                <View>
                    <Text>Ana Souza</Text>
                    <Text>Oi, tudo bem?</Text>
                </View>
                <View>
                    <Text>08:45</Text>
                </View>
            </View>
            <View style={styles.containerConversa}>
                <FAB icon="avatar" />
                <View>
                    <Text>Carlos Lima</Text>
                    <Text>Vamos marcar aquela reunião?</Text>
                </View>
                <View>
                    <Text>09:30</Text>
                </View>
            </View>
            <View style={styles.containerConversa}>
                <FAB icon="avatar" />
                <View>
                    <Text>Mariana Santos</Text>
                    <Text>Enviei o arquivo para vc.</Text>
                </View>
                <View>
                    <Text>10:10</Text>
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    containerConversa: {
        flexDirection: "row"
    },
})

export default ChatScreen;