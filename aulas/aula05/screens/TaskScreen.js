import { useState, useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
    Appbar,
    TextInput,
    FAB,
    Text,
    List,
    Modal,
    Button,
    Divider,
    Snackbar,
} from "react-native-paper";

import { TaskContext } from "../contexts/TaskContext";

function TaskScreen() {
    const { tarefas, adicionarTarefa, removerTarefa } = useContext(TaskContext);
    const [idTarefa, setIdTarefa] = useState(0);
    const [tarefa, setTarefa] = useState("");
    const [exibeSnack, setExibeSnack] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [exibeModal, setExibeModal] = useState(false);
    const [exibeAlerta, setExibeAlerta] = useState(false);

    return (
        <View style={styles.container}>
            <Appbar.Header>
                <Appbar.Content title="Lista de Tarefas" />
            </Appbar.Header>
            <FlatList
                data={tarefas}
                keyExtractor={(item, index) => index}
                renderItem={({ item }) => (
                    <>
                        <List.Item
                            onPress={() => {
                                item.concluida = !item.concluida;
                                setRefresh(!refresh);
                            }}
                            onLongPress={() => {
                                setIdTarefa(item.id);
                                setExibeAlerta(true);
                            }}
                            title={item.nome}
                            right={(props) => (
                                <List.Icon
                                    {...props}
                                    icon={
                                        item.concluida
                                            ? "check-circle-outline"
                                            : "circle-outline"
                                    }
                                />
                            )}
                        />
                        <Divider />
                    </>
                )}
            ></FlatList>
            <FAB
                style={styles.fab}
                icon="plus"
                onPress={() => setExibeModal(true)}
            />
            <Modal contentContainerStyle={styles.modal} visible={exibeModal}>
                <TextInput
                    label="Nova Tarefa"
                    value={tarefa}
                    onChangeText={(text) => setTarefa(text)}
                />
                <Button
                    onPress={() => {
                        adicionarTarefa(tarefa);
                        setExibeModal(false);
                        setExibeSnack(true);
                        setTarefa("");
                    }}
                >
                    Salvar
                </Button>
            </Modal>
            <Modal visible={exibeAlerta} contentContainerStyle={styles.modal}>
                <Text variant="labelLarge">Deseja apagar a tarefa?</Text>
                <Button onPress={() => setExibeAlerta(false)}>Não</Button>
                <Button
                    onPress={() => {
                        removerTarefa(idTarefa);
                        setIdTarefa(0);
                        setExibeAlerta(false);
                    }}
                >
                    Sim
                </Button>
            </Modal>
            <Snackbar visible={exibeSnack}
                onDismiss={() => setExibeSnack(false)}
            >
                Ação realizada!
            </Snackbar>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    fab: {
        position: "absolute",
        bottom: 16,
        right: 16,
    },
    modal: {
        padding: 16,
        backgroundColor: "white",
        margin: 16,
        borderRadius: 8,
    },
});

export default TaskScreen;
