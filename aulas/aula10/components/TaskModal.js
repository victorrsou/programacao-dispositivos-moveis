import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";

function TaskModal({ setShowModal }) {
    const [tarefa, setTarefa] = useState("");

    return (
        <View
            style={{
                margin: 16,
                padding: 16,
                backgroundColor: "white",
                borderRadius: 8,
            }}
        >
            <TextInput
                label="Nova Tarefa"
                mode="outlined"
                value={tarefa}
                onChangeText={setTarefa}
            />
            <Button mode="contained" onPress={() => setShowModal(false)}>
                Adicionar
            </Button>
            <Button mode="outlined" onPress={() => setShowModal(false)}>
                Cancelar
            </Button>
        </View>
    );
}

export default TaskModal;
