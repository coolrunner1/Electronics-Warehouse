import {ItemsContainer} from "../components/Shop/ItemsContainer.jsx";
import {Filters} from "../components/Shop/Filters.jsx";
import {useLocation} from "react-router-dom";

export const StorePage = () => {
    const location = useLocation();
    const allowFilters = location.search === null || location.search === "" || location.search === "?"
    return (
        <>
            <div className="flex flex-col w-full">
                {allowFilters && <Filters />}
                <div className="flex flex-col w-full">
                    <ItemsContainer />
                </div>
            </div>
        </>
    )
}