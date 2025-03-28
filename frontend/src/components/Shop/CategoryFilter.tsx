import {Category} from "../../types/Category";
import {ChangeEventHandler} from "react";

export const CategoryFilter = (
    props: {
        options: Category[],
        label: string,
        onChange: ChangeEventHandler<HTMLSelectElement>,
    }
) => {
    return (
        <>
            <label htmlFor="category" className="m-1 flex flex-col gap-2 text-center text-lg font-bold">
                {props.label}
                <select id={props.label.toLowerCase().replace(" ", '_')} onChange={props.onChange} className="p-1 rounded-md text-base font-medium">
                    <option key='all' value="all">all</option>
                    {props.options.map((option) => (<option key={option.category_id} value={option.category_id}>{option.parent_id === null ? option.name : "__"+option.name}</option>))}
                </select>
            </label>
        </>
    )
}