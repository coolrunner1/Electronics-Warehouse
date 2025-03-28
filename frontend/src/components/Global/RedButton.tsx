import {MouseEventHandler} from "react";

export const RedButton = (
    props: {
        name: string,
        onClick: MouseEventHandler<HTMLButtonElement>,
    }
) => {
    return (
        <>
            <button type="button" onClick={props.onClick}
                    className="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">{props.name}
            </button>
        </>
    )
}