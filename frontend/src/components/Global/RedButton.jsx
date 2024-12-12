import PropTypes from "prop-types";

export const RedButton = (props) => {
    return (
        <>
            <button type="button" onClick={props.onButtonClick}
                    className="mr-3 text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">{props.name}
            </button>
        </>
    )
}

RedButton.propTypes = {
    name: PropTypes.string,
    onButtonClick: PropTypes.func,
}