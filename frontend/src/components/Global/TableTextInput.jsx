import {Td} from "react-super-responsive-table";
import PropTypes from "prop-types";

export const TableTextInput = (props) => {
    return (
        <>
            <Td className="p-3">
                <input type="text" value={props.value} onChange={props.onChange} placeholder={props.placeholder} className="bg-transparent"/>
            </Td>
        </>
    )
}

TableTextInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
}