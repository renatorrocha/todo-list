import { PlusCircle } from "lucide-react";
import Task from "./components/task";

export default function App() {
    return (
        <main className="flex flex-col items-center max-w-screen-md m-auto">
            <div className="flex items-center gap-3 pt-[72px] pb-[54px]">
                <img src="/src/assets/rocket-icon.svg" alt="" />

                <p className="font-[900] text-product-blue text-[40px]">
                    to
                    <span className="text-product-purple-dark text-[40px]">
                        do
                    </span>
                </p>
            </div>

            <form className="flex items-center w-full gap-2 ">
                <input
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    className="flex flex-1 p-4 text-lg border rounded-lg border-base-gray-700 bg-base-gray-500 placeholder:text-base-gray-300 focus:border-product-purple-dark focus:ring-0 focus:ring-offset-0"
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
                    <div className="flex gap-2 text-base font-bold">
                        <p className="text-product-blue">Tarefas Criadas</p>5
                    </div>

                    <div className="flex gap-2 text-base font-bold">
                        <span className="text-product-purple">Concluídas</span>6
                    </div>
                </header>

                <article className="flex flex-col gap-3">
                    <Task />
                </article>
            </div>
        </main>
    );
}
