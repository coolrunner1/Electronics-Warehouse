import PropTypes from "prop-types";

export const BlueButton = (props) => {
    return (
        <>
            <button type="button" onClick={props.onClick}
                    className="mr-3 text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">{props.name}
            </button>
        </>
    )
}

BlueButton.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func,
}