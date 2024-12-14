import {BlueButton} from "../Global/BlueButton.jsx";
import {AccountInput} from "./AccountInput.jsx";

export const ClientForm = () => {
    return (
        <>
            <hr className="mt-6 mb-3 border-b-1 border-blueGray-300"/>
            <div className="flex justify-between">
                <h6 className="text-blueGray-400 text-sm mt-3 font-bold uppercase">
                    Client Information
                </h6>
                <BlueButton name={"Save"}/>
            </div>

            <div className="flex flex-wrap mt-6">
                <AccountInput/>
            </div>
        </>
    )
}