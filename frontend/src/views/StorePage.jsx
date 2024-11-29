import {Header} from "../components/Header/Header.jsx";
import {ItemsContainer} from "../components/ItemsContainer/ItemsContainer.jsx";
import {useState, useEffect} from "react";
import {Filters} from "../components/Filters/Filters.jsx";

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