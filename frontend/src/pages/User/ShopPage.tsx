import {ItemsContainer} from "../../components/Shop/ItemsContainer.tsx";
import {Filters} from "../../components/Shop/Filters.tsx";

export const ShopPage = () => {

    return (
        <div className="flex flex-col w-full">
            <Filters/>
            <div className="flex flex-col w-full">
                <ItemsContainer/>
            </div>
        </div>
    )
}