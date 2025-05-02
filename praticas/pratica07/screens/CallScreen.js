import { View, StyleSheet } from "react-native";

function CallScreen({ navigation }) {
    return (
        <View>
            <View style={styles.containerLigacoes}>
                <FAB icon="avatar" />
                <View>
                    <Text>Campos Sales</Text>
                    <View style={styles.containerLigacoes}>
                        <Text>28/02/2024</Text>
                        <Text>12:03</Text>
                    </View>
                </View>
                <View>
                    <FAB icon="telephone" />
                </View>
            </View>
            <View style={styles.containerLigacoes}>
                <FAB icon="avatar" />
                <View>
                    <Text>Rui Barbosa</Text>
                    <View style={styles.containerLigacoes}>
                        <Text>04/12/2023</Text>
                        <Text>21:10</Text>
                    </View>
                </View>
                <View>
                    <FAB icon="telephone" />
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    containerLigacoes: {
        flexDirection: "row",
    },
});

export default CallScreen;
