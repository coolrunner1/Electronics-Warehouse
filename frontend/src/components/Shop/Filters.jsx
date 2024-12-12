import {SelectFilter} from "./SelectFilter.jsx";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setCategory, setManufacturer, setSortBy, setSortingDirection} from "../../slices/filtersSlice.js";
import {CategoryFilter} from "./CategoryFilter.jsx";
import axios from "axios";
import {useLocation} from "react-router-dom";

export const Filters = () => {
    const location = useLocation();
    const allowFilters = location.search === null || location.search === "" || location.search === "?"

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/categories")
            .then((response) => setCategories(response.data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                alert("Error fetching items: " + error.message);
            });
    }, []);

    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/manufacturers")
            .then((response) => setManufacturers(["all", ...response.data.rows.map((manufacturer) => manufacturer = manufacturer.manufacturer)]))
            .catch((error) => {
                console.error('Error fetching items:', error);
                alert("Error fetching items: " + error.message);
            });
    }, [])

    const dispatch = useDispatch();

    const onCategoryChange = (e) => {
        dispatch(setCategory(e.target.value));
    };

    const onSortByChange = (e) => {
        dispatch(setSortBy(e.target.value));
    };

    const onManufacturerChange = (e) => {
        dispatch(setManufacturer(e.target.value));
    }

    const onSortingDirectionChange = (e) => {
        dispatch(setSortingDirection(e.target.value));
    };

    return (
        <>
            <div className="flex flex-col sm:flex-row pl-4 pr-4 w-full gap-2 justify-center">
                {allowFilters && (<CategoryFilter label="Category" onChange={onCategoryChange} options={categories}/>)}
                {allowFilters && (<SelectFilter label="Manufacturer" onChange={onManufacturerChange} options={manufacturers}/>)}
                <SelectFilter label="Sort by" onChange={onSortByChange} options={['Price', 'Name']}/>
                <SelectFilter label="Sorting direction" onChange={onSortingDirectionChange} options={['Ascending', 'Descending']} />
            </div>
        </>
    )
}