import { View, FlatList, StyleSheet } from "react-native";
import { Appbar, FAB, List, Text } from "react-native-paper";

const contatos = [
    { id: 1, nome: "Mãe", fone: "61 99999-9999" },
    { id: 2, nome: "Irmão", fone: "61 98888-8888" },
    { id: 3, nome: "Avó", fone: "61 97777-7777" },
];

function ContactScreen() {
    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Contatos" />
                <Appbar.Action icon="dots-vertical" />
            </Appbar.Header>
            <FlatList
                data={contatos}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <List.Item
                        left={(props) => (
                            <List.Icon {...props} icon="account" />
                        )}
                        title={item.nome}
                        description={item.fone}
                    />
                )}
            />
            <View style={styles.fab}>
                <FAB icon="plus" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    fab: {
        flexDirection: "row",
        position: "absolute",
        right: 16,
        bottom: 16,
    },
    container: {
        flex: 1,    
    }
});

export default ContactScreen;
