import { PlusCircle } from "lucide-react";
import Task from "./components/task";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export default function App() {
    const [tasks, setTasks] = useState<Task[]>([
        { text: "Criar esse todo-list.", isDone: true },
    ]);
    const [newTask, setNewTask] = useState("");

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        setTasks([...tasks, { text: newTask, isDone: false }]);
        setNewTask("");
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");
        setNewTask(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório!");
    }

    function deleteTask(taskText: string) {
        setTasks(tasks.filter((task) => task.text !== taskText));
    }

    function handleToggleDone(taskText: string) {
        setTasks(
            tasks.map((task) =>
                task.text === taskText
                    ? { ...task, isDone: !task.isDone }
                    : task
            )
        );
    }

    const totalCompletedTasks = tasks.filter((task) => task.isDone).length;

    return (
        <main className="flex flex-col items-center max-w-screen-md px-4 m-auto">
            <span className="w-full bg-base-gray-700 h-[194px] -z-20 absolute" />
            
            <div className="flex items-center gap-3 pt-[72px] pb-[54px]">
                <img src="/src/assets/rocket-icon.svg" alt="" />

                <p className="font-[900] text-product-blue text-[40px]">
                    to
                    <span className="text-product-purple-dark text-[40px]">
                        do
                    </span>
                </p>
            </div>

            <form
                className="flex items-center w-full gap-2"
                onSubmit={handleCreateNewTask}
            >
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    className="flex flex-1 p-4 text-lg border rounded-lg border-base-gray-700 bg-base-gray-500 placeholder:text-base-gray-300 focus:border-product-purple-dark focus:ring-0 focus:ring-offset-0"
                    value={newTask}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />

                <button
                    type="submit"
                    className="flex items-center gap-2 p-4 text-base font-bold transition-all duration-300 rounded-lg text-base-gray-100 bg-product-blue-dark hover:bg-product-blue"
                >
                    Criar
                    <PlusCircle className="bg-[transparent] size-4" />
                </button>
            </form>

            <div className="flex flex-col gap-6 pt-16 size-full">
                <header className="flex justify-between flex-1">
                    <div className="flex items-center gap-2 text-base font-bold">
                        <p className="text-product-blue">Tarefas Criadas</p>{" "}
                        <span className="px-2 py-1 rounded-full bg-base-gray-400 text-base-gray-200">
                            {tasks.length}
                        </span>
                    </div>

                    <div className="flex items-center gap-2 text-base font-bold">
                        <span className="text-product-purple">Concluídas</span>{" "}
                        <span className="px-2 py-1 rounded-full bg-base-gray-400 text-base-gray-200">
                            {totalCompletedTasks} de {tasks.length}
                        </span>
                    </div>
                </header>

                <article className="flex flex-col gap-3">
                    {tasks.map((task) => (
                        <Task
                            key={task.text}
                            task={task}
                            onDeleteFn={deleteTask}
                            onToggleDoneFn={handleToggleDone}
                        />
                    ))}
                </article>
            </div>
        </main>
    );
}
