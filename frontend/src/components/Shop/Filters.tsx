import {SelectFilter} from "./SelectFilter";
import {ChangeEvent} from "react";
import {useDispatch} from "react-redux";
import {setCategory, setManufacturer, setSortBy, setSortingDirection} from "../../slices/filtersSlice";
import {CategoryFilter} from "./CategoryFilter";
import {useTranslation} from "react-i18next";
import {useQuery} from "@tanstack/react-query";
import {getCategories} from "../../api/categories.ts";
import {getItemManufacturers} from "../../api/items.ts";

export const Filters = () => {
    const {t} = useTranslation();

    const {data: categories} = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    })

    const {data: manufacturers} = useQuery({
        queryKey: ['manufacturers'],
        queryFn: getItemManufacturers
    });

    const dispatch = useDispatch();

    const onCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCategory(e.target.value));
    };

    const onSortByChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortBy(e.target.value));
    };

    const onManufacturerChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setManufacturer(e.target.value));
    }

    const onSortingDirectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSortingDirection(e.target.value));
    };

    return (
        <>
            <div className="flex flex-col min-[900px]:flex-row pl-4 pr-4 w-full gap-2 justify-center">
                {categories && <CategoryFilter label={t('category')} onChange={onCategoryChange} options={categories}/>}
                {manufacturers && <SelectFilter label={t('manufacturer')} onChange={onManufacturerChange} options={['all', ...manufacturers]}/>}
                <SelectFilter label={t('sort-by')} onChange={onSortByChange} options={['name', 'price', 'last-arrival']}/>
                <SelectFilter label={t('sort-order')} onChange={onSortingDirectionChange} options={['asc', 'desc']} />
            </div>
        </>
    )
}