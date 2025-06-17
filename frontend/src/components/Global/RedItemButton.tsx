import {MouseEvent} from "react";

export type ItemButtonProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    value?: number,
    text: string
}

export const RedItemButton = (props: ItemButtonProps) => {
    return (
        <button
            className="text-sm text-white font-bold py-2 px-3 bg-red-500 hover:bg-red-700 focus:ring-2 focus:ring-red-900 rounded-md transition-all duration-300 ease-in-out"
            onClick={props.onClick}
            value={props.value}
        >
            {props.text}
        </button>
    );
};