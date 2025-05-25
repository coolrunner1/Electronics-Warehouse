import {RedButton} from "./RedButton";
import {BlueButton} from "./BlueButton";
import {MouseEventHandler} from "react";
import {useTranslation} from "react-i18next";

export const NewRemoveButtons = (
    props: {
        id: number,
        onNewClick: MouseEventHandler<HTMLButtonElement>,
    }
) => {
    const {t} = useTranslation();

    return (
        <>
            {props.id === 99999
                ? <RedButton onClick={props.onNewClick} name={t('remove')}/>
                : <BlueButton onClick={props.onNewClick} name={t('new')}/>}
        </>
    )
}