import PropTypes from "prop-types";

export const UsersTableHeader = (props) => {
    return (
        <>
            <th className="text-left p-3 px-5">{props.name}</th>
        </>
    )
}

UsersTableHeader.propTypes = {
    name: PropTypes.string,
}