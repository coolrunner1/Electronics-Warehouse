import {ItemButtonProps} from "./RedItemButton.tsx";

export const BlueItemButton = (props: ItemButtonProps) => {
    return (
        <button
            className="text-sm text-white font-bold py-2 px-3 bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-900 rounded-md transition-all duration-300 ease-in-out"
            onClick={props.onClick}
            value={props.value}
        >
            {props.text}
        </button>
    );
};