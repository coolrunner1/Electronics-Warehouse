import {MouseEventHandler} from "react";

export type ButtonComponentProps = {
    name: string,
    value?: string,
    onClick: MouseEventHandler<HTMLButtonElement>,
}