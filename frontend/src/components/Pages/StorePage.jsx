import {ItemsContainer} from "../Shop/ItemsContainer.jsx";
import {Filters} from "../Shop/Filters.jsx";

export const StorePage = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <Filters />
                <div className="flex flex-col w-full">
                    <ItemsContainer />
                </div>
            </div>
        </>
    )
}