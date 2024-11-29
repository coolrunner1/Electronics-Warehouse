export const SelectFilter = (props) => {
    return (
        <>
            <label htmlFor="category" className="m-1 flex flex-col gap-2 text-center text-lg font-bold">
                {props.label}
                <select id="category" className="p-1 rounded-md text-base font-medium">
                    {props.options.map((option) => (<option key={option} value={option}>{option}</option>))}
                </select>
            </label>
        </>
    )
}