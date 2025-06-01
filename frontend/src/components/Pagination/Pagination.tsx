import {PageButton} from "./PageButton.tsx";
import {ChangeEvent, useCallback, useEffect, useState} from "react";

export type PaginationProps = {
    currentPage: number;
    setCurrentPage: (page: number) => void;
    pageCount: number;
    itemsPerPage: number;
    setItemsPerPage: (page: number) => void;
}

export const Pagination = (
    props: PaginationProps
) => {
    const [pageArray, setPageArray] = useState<string[]>([]);

    const displayPageControls = useCallback(() => {
        if (props.pageCount <= 1) {
            setPageArray(['1']);
        }
        if (props.pageCount < 7) {
            let arr = [];
            for (let i = 2; i <= props.pageCount-1; i++) {
                console.log(i)
                arr.push(i.toString());
            }
            setPageArray(arr);
            return;
        }
        let arr = [];
        let start = 2, end = props.pageCount - 1;
        if (props.currentPage > 3) {
            arr.push('...');
            start = props.currentPage-1;
        }
        if (props.currentPage+2 < props.pageCount-1) {
            end = props.currentPage+1;
        }
        for (let i = start; i <= end; i++) {
            arr.push(i.toString());
        }
        if (end < props.pageCount-1) {
            arr.push('...');
        }
        setPageArray(arr);
    }, [props.currentPage, props.pageCount]);

    const onItemsPerPageChange = (event: ChangeEvent<HTMLSelectElement>) => {
        props.setItemsPerPage(parseInt(event.target.value));
        props.setCurrentPage(1);
    }

    useEffect(() => {
        displayPageControls();
    }, [props.currentPage, props.pageCount]);

    return (
        <div className="flex flex-row">
            <select
                onChange={onItemsPerPageChange}
                defaultValue={props.itemsPerPage}
            >
                <option>5</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>30</option>
                <option>50</option>
            </select>
            <div className="flex items-center justify-between bg-white dark:bg-[#242424] px-4 py-3 sm:px-6">
                <div className="flex flex-1 justify-center items-center text-center sm:hidden gap-3">
                    <button
                        disabled={props.currentPage === 1}
                        onClick={() => props.currentPage > 1 && props.setCurrentPage(props.currentPage-1)}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        &lt;
                    </button>
                    <div>Page {props.currentPage}</div>
                    <button
                        disabled={props.currentPage === props.pageCount}
                        onClick={() => props.currentPage < props.pageCount && props.setCurrentPage(props.currentPage+1)}
                        className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        &gt;
                    </button>
                </div>
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                        <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs">
                            <button
                                disabled={props.currentPage === 1}
                                onClick={() => props.currentPage > 1 && props.setCurrentPage(props.currentPage-1)}
                                className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 dark:text-white ring-1 ring-gray-300 ring-inset disabled:bg-gray-500 hover:enabled:bg-gray-50 hover:enabled:dark:bg-gray-900 focus:z-20 focus:outline-offset-0"
                            >
                                <span>&lt;</span>
                            </button>
                            <PageButton
                                page={1}
                                onClick={() => props.setCurrentPage(1)}
                                selected={props.currentPage === 1}
                            />
                            {pageArray.map((value, key) => (
                                value !== "..." ?
                                    <PageButton
                                        key={key}
                                        onClick={() => props.setCurrentPage(parseInt(value))}
                                        page={parseInt(value)}
                                        selected={props.currentPage === parseInt(value)}
                                    />
                                    :
                                    <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 dark:text-white ring-1 ring-gray-300 ring-inset focus:outline-offset-0">
                                          ...
                                        </span>
                            ))}
                            {props.pageCount >1 &&
                                <PageButton
                                    page={props.pageCount}
                                    onClick={() => props.setCurrentPage(props.pageCount)}
                                    selected={props.currentPage === props.pageCount}
                                />
                            }
                            <button
                                disabled={props.currentPage === props.pageCount}
                                onClick={() => props.currentPage < props.pageCount && props.setCurrentPage(props.currentPage+1)}
                                className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 dark:text-white ring-1 ring-gray-300 ring-inset disabled:bg-gray-500 hover:enabled:bg-gray-50 hover:enabled:dark:bg-gray-900 focus:z-20 focus:outline-offset-0"
                            >
                                <span>&gt;</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};