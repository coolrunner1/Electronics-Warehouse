import { useNavigate } from 'react-router-dom';
import './SearchBar.css'
import {useState} from "react";
import {useLocation} from "react-router-dom";
import PropTypes from "prop-types";

export function SearchBar(props) {
    const navigate = useNavigate();
    const location = useLocation();

    const [search, setSearch] = useState('');

    const keyPressHandler = (e) => {
        if (e.key === 'Enter') {
            navigate('/'+props.pathname+'?'+search);
        }
    }

    const changeHandler = (event) => {
        setSearch(event.target.value);
        if (location.pathname === "/store") {
            navigate('/store?'+search);
        }
    }

    return (
        <>
            <div className="w-full">
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
                        className="peer h-full w-full outline-none text-sm light:text-gray-700 pr-2 bg-search"
                        type="text"
                        id="search"
                        placeholder="Search something.."
                        onChange={event => setSearch(event.target.value)}
                        onKeyUp={event => {changeHandler(event)}}
                        onKeyDown={keyPressHandler}
                    />
                </div>
            </div>
        </>
    )
}

SearchBar.propTypes = {
    pathname: PropTypes.string,
}