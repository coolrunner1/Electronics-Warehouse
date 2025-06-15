import {ButtonComponentProps} from "../../types/ButtonComponentProps.ts";

export const BlueEditPageButton = (
    props: ButtonComponentProps
) => {
    return (
        <>
            <button
                type="button"
                onClick={props.onClick}
                className="text-md text-white font-bold py-2 px-5 bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-900 rounded-md transition-all duration-300 ease-in-out"
            >
                {props.name}
            </button>
        </>
    )
}