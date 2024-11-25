import {Header} from "../components/Header/Header.jsx";
import {ItemsContainer} from "../components/ItemsContainer/ItemsContainer.jsx";
import {NavigationBar} from "../components/NavigationBar/NavigationBar.jsx";
import {useState, useEffect} from "react";

export const StorePage = () => {
    //const [test, setTest] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/items")
            .then((res) => res.json())
            .then((data) => console.log(data.rows));
    }, []);

    return (
        <>
            <div className="flex flex-row w-full">
                <NavigationBar />
                <div className="flex flex-col w-full">
                    <ItemsContainer />
                </div>
            </div>
        </>
    )
}