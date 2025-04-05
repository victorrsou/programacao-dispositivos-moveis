// Armazena as propriedades globais - Contexto Global!
import { createContext, useState } from "react";

const TaskContext = createContext();

// para poder compartilhar o meu contexto
const TaskProvider = (props) => {
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = (tarefa) => {

        if (tarefa) {
            const novaTarefa = {
                id: Math.random(),
                nome: tarefa,
                concluida: false
            }

            // "propagar meu estado atual e adicionar uma nova tarefa"
            setTarefas([...tarefas, novaTarefa]);
        }
    };

    const removerTarefa = (id) => {
        const tarefasAtualizadas = tarefas.filter((item) => item.id != id);
        setTarefas(tarefasAtualizadas)
    };

    return <TaskContext.Provider
        value={{tarefas, adicionarTarefa, removerTarefa}}
    >{props.children}</TaskContext.Provider>;
};

export { TaskContext, TaskProvider };
