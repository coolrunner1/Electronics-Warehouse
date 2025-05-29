import i18n from "i18next";
import {ChangeEvent} from "react";

export const LanguageSelector = () => {
    const onChangeLang = (e: ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        <select defaultValue={i18n.language} onChange={onChangeLang}>
            <option value="en">English</option>
            <option value="ru">Русский</option>
        </select>
    );
};