import PropTypes from "prop-types";

export const AccountInput = (props) => {
    return (
        <>
            <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                           htmlFor="grid-password">
                        {props.name}
                    </label>
                    <input type="text"
                           className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                           value={props.value} onChange={props.onChange} placeholder={props.placeholder}/>
                </div>
            </div>
        </>
    )
}

AccountInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
}