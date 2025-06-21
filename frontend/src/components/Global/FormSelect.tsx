import {ChangeEventHandler} from "react";
import {useTranslation} from "react-i18next";

export type FormSelectProps = {
    options: string[],
    label: string,
    value: string,
    defaultValue?: string,
    onChange: ChangeEventHandler<HTMLSelectElement>,
};

export const FormSelect = (
    props: FormSelectProps
) => {
    const {t} = useTranslation();

    return (
        <div className="w-full lg:w-6/12 px-4">
            <div className="relative w-full mb-3">
                <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                >
                    {props.label}
                </label>
                <select
                    id={props.label.toLowerCase().replace(" ", '_')}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    onChange={props.onChange}
                    defaultValue={props.defaultValue}
                >
                    {props.options.map((option) => (<option key={option} value={option}>{t(option)}</option>))}
                </select>
            </div>
        </div>
    )
}