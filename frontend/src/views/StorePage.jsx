import {Header} from "../components/Header/Header.jsx";
import {ItemsContainer} from "../components/ItemsContainer/ItemsContainer.jsx";
import {NavigationBar} from "../components/NavigationBar/NavigationBar.jsx";

export const StorePage = () => {
    return (
        <>
            <div className="flex flex-row w-full">
                <NavigationBar />
                <div className="flex flex-col w-full">
                    <Header />
                    <ItemsContainer />
                </div>
            </div>
        </>
    )
}