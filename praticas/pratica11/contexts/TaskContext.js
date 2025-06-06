import { createContext, useState } from "react";
import * as TaskService from "../services/TaskService";

const TaskContext = createContext();

function TaskProvider({children}) {
    const [tasks, setTasks] = useState([]);

    const getTasks = async () => {
        try {
            const response = await TaskService.getTasks();
            setTasks(response);
        } catch (error) {
            throw new Error("Erro ao buscar tarefas: ", error);
        }
    }

    const addTask = async (newTask) => {
        try {
            const response = await
            TaskService.addTask(newTask);
            setTasks([...tasks, response]);
        } catch (error) {
            throw new Error("Erro ao adicionar tarefa:", error);
        }
    }

    const updateTask = async (updatedTask) => {
        try {
            await TaskService.updateTask(updatedTask.id, updatedTask);
            setTasks(
                tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
            );
        } catch (error) {
            throw new Error("Erro ao atualizar tarefa: ", error);
        }
    }

    const deleteTask = async (taskId) => {
        try {
            await TaskService.deleteTask(taskId);
            setTasks(tasks.filter((task) => task.id !== taskId));
        } catch (error) {
            throw new Error("Erro ao excluir tarefa:", error);
        }
    }

    return (
        <TaskContext.Provider
            value={{tasks, getTasks, addTask, updateTask, deleteTask}}
        >
            {children}
        </TaskContext.Provider>
    )
}

export { TaskContext, TaskProvider}