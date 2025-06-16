import { useNavigate } from 'react-router-dom';
import './SearchBar.css'
import {KeyboardEvent, useState} from "react";
import {useLocation} from "react-router-dom";

export function SearchBar(
    props: {
        pathname: string,
        placeholder: string,
        customClassName?: string
    }
) {
    const navigate = useNavigate();
    const location = useLocation();

    const [search, setSearch] = useState('');

    const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            navigate('/'+props.pathname+'?'+search);
        }
    }

    const keyUpHandler = () => {
        if (location.pathname === "/"+props.pathname) {
            navigate('/'+props.pathname+'?'+search);
        }
    }

    return (
        <>
            <div className={"w-full "+props.customClassName || ''}>
                <div
                    className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg overflow-hidden bg-search">
                    <div className="grid place-items-center h-full w-12 text-gray-300 bg-search">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                        </svg>
                    </div>

                    <input
                        className="peer h-full w-full outline-none text-sm pr-2 bg-search"
                        type="text"
                        id="search"
                        placeholder={props.placeholder}
                        onChange={event => setSearch(event.target.value)}
                        onKeyUp={keyUpHandler}
                        onKeyDown={keyDownHandler}
                    />
                </div>
            </div>
        </>
    )
}