import {SelectFilter} from "./SelectFilter";
import {ChangeEvent, useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setCategory, setManufacturer, setSortBy, setSortingDirection} from "../../slices/filtersSlice";
import {CategoryFilter} from "./CategoryFilter";
import axios from "axios";
import {useLocation} from "react-router-dom";
import {Item} from "../../types/Item";
import {useTranslation} from "react-i18next";

export const Filters = () => {
    const location = useLocation();
    const allowFilters = location.search === null || location.search === "" || location.search === "?";
    const {t} = useTranslation();

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/v1/categories")
            .then((response) => setCategories(response.data))
            .catch((error) => {
                console.error('Error fetching items:', error);
                alert("Error fetching items: " + error.message);
            });
    }, []);

    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/manufacturers")
            .then((response) => setManufacturers([t('all'), ...response.data.rows.map((item: Item) => item.manufacturer)]))
            .catch((error) => {
                console.error('Error fetching items:', error);
                alert("Error fetching items: " + error.message);
            });
    }, [])

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
            <div className="flex flex-col sm:flex-row pl-4 pr-4 w-full gap-2 justify-center">
                {allowFilters && (<CategoryFilter label={t('category')} onChange={onCategoryChange} options={categories}/>)}
                {allowFilters && (<SelectFilter label={t('manufacturer')} onChange={onManufacturerChange} options={manufacturers}/>)}
                <SelectFilter label={t('sort-by')} onChange={onSortByChange} options={['Name', 'Price']}/>
                <SelectFilter label={t('sort-order')} onChange={onSortingDirectionChange} options={['Ascending', 'Descending']} />
            </div>
        </>
    )
}