import {SearchBar} from "../SearchBar/SearchBar.jsx";
import {WarehouseLogo} from "../WarehouseLogo/WarehouseLogo.jsx";

export function Header() {
    return (
        <>
            <header className="header flex flex-row gap-x-5 p-4 bg-gray-100 dark:bg-gray-950">
                <WarehouseLogo />
                <SearchBar />
            </header>
        </>
    )
}