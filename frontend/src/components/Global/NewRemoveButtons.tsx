import {RedButton} from "./RedButton";
import {BlueButton} from "./BlueButton";
import {MouseEventHandler} from "react";
import {useTranslation} from "react-i18next";
import {NEW_ENTRY} from "../../constants/newEntry.ts";

export type NewRemoveButtonsProps = {
    id: number,
    onNewClick: MouseEventHandler<HTMLButtonElement>,
};

export const NewRemoveButtons = (
    props: NewRemoveButtonsProps
) => {
    const {t} = useTranslation();

    return (
        <>
            {props.id === NEW_ENTRY
                ? <RedButton onClick={props.onNewClick} name={t('remove')}/>
                : <BlueButton onClick={props.onNewClick} name={t('new')}/>}
        </>
    )
}