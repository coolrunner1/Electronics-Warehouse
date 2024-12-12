import PropTypes from "prop-types";

export const TableHeader = (props) => {
    return (
        <>
            <th className="text-left p-3 px-5">{props.name}</th>
        </>
    )
}

TableHeader.propTypes = {
    name: PropTypes.string,
}