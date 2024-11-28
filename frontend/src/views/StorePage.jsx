import {Header} from "../components/Header/Header.jsx";
import {ItemsContainer} from "../components/ItemsContainer/ItemsContainer.jsx";
import {NavigationBar} from "../components/NavigationBar/NavigationBar.jsx";
import {useState, useEffect} from "react";

export const StorePage = () => {
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