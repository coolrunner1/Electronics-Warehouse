export type NumberToggleProps = {
    decrement: () => void,
    increment: () => void,
    value: number,
};

export const NumberToggle = (
    props: NumberToggleProps
) => {
    return (
        <>
            <div className="flex items-center ">
                <span
                    className="cursor-pointer rounded-l py-1 px-3.5 duration-100 bg-blue-500 hover:bg-blue-600 hover:text-blue-50"
                    onClick={props.decrement}> - </span>
                <input className="h-8 w-8 text-center text-xs outline-none"
                       value={props.value} readOnly={true}/>
                <span
                    className="cursor-pointer rounded-r  py-1 px-3 duration-100 bg-blue-500 hover:bg-blue-600 hover:text-blue-50"
                    onClick={props.increment}> + </span>
            </div>
        </>
    )
}