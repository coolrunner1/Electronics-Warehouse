import {ChangeEventHandler} from "react";

export const TableTextInput = (
    props: {
        value: string,
        onChange: ChangeEventHandler<HTMLInputElement>,
        placeholder?: string,
    }
) => {
    return (
        <>
            <input type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder} className="bg-transparent"/>
        </>
    )
}