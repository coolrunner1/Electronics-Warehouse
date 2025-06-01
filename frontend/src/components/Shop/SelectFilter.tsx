import {ChangeEventHandler} from "react";
import {useTranslation} from "react-i18next";

export type SelectFilterProps = {
    options: string[],
    label: string,
    onChange: ChangeEventHandler<HTMLSelectElement>,
};

export const SelectFilter = (
    props: SelectFilterProps
) => {
    const {t} = useTranslation();

    return (
        <>
            <label htmlFor={props.label.toLowerCase().replace(" ", '_')} className="m-1 flex flex-col gap-2 text-center text-lg font-bold">
                {props.label}
                <select
                    id={props.label.toLowerCase().replace(" ", '_')}
                    className="p-1 rounded-md text-base font-medium border border-gray-100 dark:border-gray-600 hover:bg-gray-50 hover:dark:bg-gray-600 focus:outline-none focus:bg-gray-100 focus:dark:bg-gray-900"
                    onChange={props.onChange}
                >
                    {props.options.map((option) => (<option key={option} value={option}>{t(option)}</option>))}
                </select>
            </label>
        </>
    )
}