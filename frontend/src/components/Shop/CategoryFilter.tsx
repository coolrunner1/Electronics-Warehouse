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
                <select id={props.label.toLowerCase().replace(" ", '_')} onChange={props.onChange} className="p-1 rounded-md text-base font-medium">
                    <option key='all' value="all">{t('all')}</option>
                    {props.options.map((option) => (
                        <>
                            <option key={option.category_id} value={option.category_id}>{i18n.language === 'en' ? option.nameEN : option.nameRU}</option>
                            {option.subcategories &&
                                option.subcategories.map(item => (
                                    <option key={item.category_id} value={item.category_id}>__{i18n.language === 'en' ? item.nameEN : item.nameRU}</option>
                                ))
                            }
                        </>
                        ))}
                </select>
            </label>
        </>
    )
}