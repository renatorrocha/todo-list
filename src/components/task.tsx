import { Trash2 } from "lucide-react";
import { twMerge } from "tailwind-merge";

interface ITask {
    task: Task;
    onDeleteFn: (text: string) => void;
    onToggleDoneFn: (text: string) => void;
}

export default function Task({ task, onDeleteFn, onToggleDoneFn }: ITask) {
    function handleDeleteTask() {
        onDeleteFn(task.text);
    }

    function handleToggleDone() {
        onToggleDoneFn(task.text);
    }

    return (
        <div
            className={twMerge(
                "flex items-center justify-between gap-3 p-4 border rounded-lg bg-base-gray-500 border-base-gray-400",
                task.isDone && "border-base-gray-500"
            )}
        >
            <input
                type="checkbox"
                checked={task.isDone}
                onChange={handleToggleDone}
                className="transition-all rounded-full bg-[transparent] border-2 appearance-none border-product-blue text-product-blue hover:bg-product-blue-dark/20 hover:border-product-blue-dark checked:text-product-purple/60 checked:hover:text-product-purple-dark focus:border-0 focus:outline-none focus:ring-offset-0"
            />

            <p
                className={twMerge(
                    "flex-1 text-wrap",
                    task.isDone && "line-through text-base-gray-300"
                )}
            >
                {task.text}
            </p>

            <Trash2
                className="cursor-pointer size-6 text-base-gray-300 hover:text-feedback-danger"
                onClick={handleDeleteTask}
            />
        </div>
    );
}
