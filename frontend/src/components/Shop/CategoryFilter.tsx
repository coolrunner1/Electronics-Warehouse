import {Category} from "../../types/Category";
import {ChangeEventHandler} from "react";
import {useTranslation} from "react-i18next";

export const CategoryFilter = (
    props: {
        options: Category[],
        label: string,
        onChange: ChangeEventHandler<HTMLSelectElement>,
    }
) => {
    const {i18n, t} =  useTranslation();

    return (
        <>
            <label htmlFor="category" className="m-1 flex flex-col gap-2 text-center text-lg font-bold">
                {props.label}
                <select
                    id={props.label.toLowerCase().replace(" ", '_')}
                    className="p-1 rounded-md text-base font-medium border border-gray-100 dark:border-gray-600 hover:bg-gray-50 hover:dark:bg-gray-600 focus:outline-none focus:bg-gray-100 focus:dark:bg-gray-900 transition-all duration-300 ease-in-out"
                    onChange={props.onChange}
                >
                    <option value="">{t('all')}</option>
                    {props.options.map((option) => (
                        <>
                            <option key={option.category_id} value={option.category_id}>{i18n.language === 'ru' ? option.nameRU : option.nameEN}</option>
                            {option.subcategories &&
                                option.subcategories.map(item => (
                                    <option key={item.category_id} value={item.category_id}>__{i18n.language === 'ru' ? item.nameRU : item.nameEN}</option>
                                ))
                            }
                        </>
                        ))}
                </select>
            </label>
        </>
    )
}