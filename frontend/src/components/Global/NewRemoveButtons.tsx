import {RedButton} from "./RedButton";
import {BlueButton} from "./BlueButton";
import {MouseEventHandler} from "react";

export const NewRemoveButtons = (
    props: {
        id: number,
        onNewClick: MouseEventHandler<HTMLButtonElement>,
    }
) => {
    return (
        <>
            {props.id === 99999
                ? <RedButton onClick={props.onNewClick} name={"Remove"}/>
                : <BlueButton onClick={props.onNewClick} name={"New"}/>}
        </>
    )
}