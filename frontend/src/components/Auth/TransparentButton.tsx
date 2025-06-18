import {ButtonComponentProps} from "../../types/ButtonComponentProps.ts";

export const TransparentButton = (props: ButtonComponentProps) => {
    return (
        <button
            className="p-2 rounded-lg shadow backdrop-blur-xl bg-[#0000001f] hover:bg-[#0000003f] transition duration-200"
            onClick={props.onClick}
        >
            {props.name}
        </button>
    );
};