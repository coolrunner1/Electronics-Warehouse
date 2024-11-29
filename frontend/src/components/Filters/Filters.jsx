import {SelectFilter} from "../SelectFilter/SelectFilter.jsx";

export const Filters = () => {
    return (
        <>
            <div className="flex flex-row w-full gap-2 justify-center">
                <SelectFilter label="Category" options={['placeholder']}/>
                <SelectFilter label="Manufacturer" options={['placeholder']}/>
                <SelectFilter label="Sort by" options={['Name', 'Price']}/>
                <SelectFilter label="Sorting direction" options={['Ascending', 'Descending']} />
            </div>
        </>
    )
}