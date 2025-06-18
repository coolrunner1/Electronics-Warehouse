import i18n from "i18next";
import {ChangeEvent} from "react";

export type LanguageSelectorProps = {
    className?: string;
}

export const LanguageSelector = (
    props: LanguageSelectorProps
) => {
    const onChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <>
            <select className={"hidden md:flex "+props.className} defaultValue={i18n.language} onChange={onChangeLang}>
                <option value="en">English</option>
                <option value="ru">Русский</option>
            </select>
            <select className={"md:hidden "+props.className} defaultValue={i18n.language} onChange={onChangeLang}>
                <option value="en">en</option>
                <option value="ru">ru</option>
            </select>
        </>
    );
};