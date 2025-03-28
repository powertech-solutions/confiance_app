import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export default function SwitchTableView() {
    const [isListview, setIListView] = useState(false)
    return (
        <div className="bg-gray-100 shadow grid grid-cols-2 w-[4em] p-[0.2em] rounded-[5px]">
            <button className="bg-white flex items-center justify-center rounded-[5px] shadow-[0px_10px_20px_rgba(0,0,0,0.1)] py-[0.15em]">
                <Icon icon="flowbite:list-outline" className=" text-[1.3em]" />
            </button>
            <button className="flex items-center justify-center rounded-[5px]">
                <Icon icon="mage:dashboard" className=" text-[1em]" />
            </button>
        </div>
    );
};
