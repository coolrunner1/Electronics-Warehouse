import {ButtonComponentProps} from "../../types/ButtonComponentProps.ts";

export const BlueButton = (
    props: ButtonComponentProps
) => {
    return (
        <>
            <button
                type="button"
                onClick={props.onClick}
                className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
            >
                {props.name}
            </button>
        </>
    )
}