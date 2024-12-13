import PropTypes from "prop-types";

export const TableTextInput = (props) => {
    return (
        <>
            <input type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder} className="bg-transparent"/>
        </>
    )
}

TableTextInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
}