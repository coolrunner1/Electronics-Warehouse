import {MouseEventHandler} from "react";

export type PageButtonProps = {
    page: number,
    selected?: boolean,
    onClick: MouseEventHandler<HTMLButtonElement>,
}

export const PageButton = (
    props: PageButtonProps
) => {
    return (
        <>
            {!props.selected
                ? <button
                    onClick={props.onClick}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white ring-1 ring-gray-300 ring-inset hover:bg-gray-50 dark:hover:bg-gray-900 focus:z-20 focus:outline-offset-0"
                >
                    {props.page}
                </button>
                : <button
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    {props.page}
                </button>
            }
        </>
    );
};