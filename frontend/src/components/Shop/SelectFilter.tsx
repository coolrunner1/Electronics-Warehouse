import {ChangeEventHandler} from "react";

export const SelectFilter = (
    props: {
        options: string[],
        label: string,
        onChange: ChangeEventHandler<HTMLSelectElement>,
    }
) => {
    return (
        <>
            <label htmlFor={props.label.toLowerCase().replace(" ", '_')} className="m-1 flex flex-col gap-2 text-center text-lg font-bold">
                {props.label}
                <select id={props.label.toLowerCase().replace(" ", '_')} onChange={props.onChange} className="p-1 rounded-md text-base font-medium">
                    {props.options.map((option) => (<option key={option} value={option}>{option}</option>))}
                </select>
            </label>
        </>
    )
}