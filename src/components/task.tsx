import { Trash2 } from "lucide-react";

export default function Task() {
    return (
        <div className="flex items-center justify-between gap-3 p-4 border rounded-lg bg-base-gray-400 border-base-gray-500">
            <input
                type="checkbox"
                className="transition-all rounded-full bg-[transparent] border-2 appearance-none border-product-blue text-product-blue hover:bg-product-blue-dark/20 hover:border-product-blue-dark checked:text-product-purple checked:hover:text-product-purple-dark focus:border-0 focus:outline-none focus:ring-offset-0"
            />

            <p className="flex-1 text-wrap">
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Integer urna interdum massa libero auctor neque turpis
                turpis semper. Integer urna interdum massa libero auctor neque
                turpis turpis semper. Integer urna interdum massa libero auctor
                neque turpis turpis semper.
            </p>

            <Trash2 className="cursor-pointer size-6 text-base-gray-300 hover:text-feedback-danger" />
        </div>
    );
}
