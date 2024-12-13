import {RedButton} from "./RedButton.jsx";
import {BlueButton} from "./BlueButton.jsx";
import PropTypes from "prop-types";

export const NewRemoveButtons = (props) => {
    return (
        <>
            {props.id === 99999
                ? <RedButton onButtonClick={props.onNewClick} name={"Remove"}/>
                : <BlueButton onButtonClick={props.onNewClick} name={"New"}/>}
        </>
    )
}

NewRemoveButtons.propTypes = {
    id: PropTypes.number,
    onNewClick: PropTypes.func,
}