import {MouseEvent, ReactNode} from "react";

export type HeaderButtonProps = {
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    children: ReactNode;
}

export const HeaderButton = (props: HeaderButtonProps) => {
    return (
        <button
            className='hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 font-semibold py-3 px-3 border border-gray-50 dark:border-gray-700 rounded shadow'
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
};