import {SelectFilter} from "../SelectFilter/SelectFilter";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setCategory, setManufacturer, setSortBy, setSortingDirection} from "../../slices/filtersSlice";
import {CategoryFilter} from "../CategoryFilter/CategoryFilter.jsx";

export const Filters = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/categories")
            .then((res) => res.json())
            .then((data) => setCategories(data.rows))
            .catch((error) => {
                console.error('Error fetching items:', error);
                alert("Error fetching items: " + error.message);
            });
    }, []);

    const [manufacturers, setManufacturers] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/manufacturers")
            .then((res) => res.json())
            .then((data) => setManufacturers(["all", ...data.rows.map((manufacturer) => manufacturer = manufacturer.manufacturer)]))
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
                <CategoryFilter label="Category" onChange={onCategoryChange} options={categories}/>
                <SelectFilter label="Manufacturer" onChange={onManufacturerChange} options={manufacturers}/>
                <SelectFilter label="Sort by" onChange={onSortByChange} options={['Price', 'Name']}/>
                <SelectFilter label="Sorting direction" onChange={onSortingDirectionChange} options={['Ascending', 'Descending']} />
            </div>
        </>
    )
}