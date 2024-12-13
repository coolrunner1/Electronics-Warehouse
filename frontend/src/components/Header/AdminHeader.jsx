import {AdminButton} from "../Global/AdminButton.jsx";
import {AccountButton} from "../Global/AccountButton.jsx";

export const AdminHeader = () => {
    return (
        <>
            <div className="p-4 flex justify-between">
                <AdminButton/>
                <h1 className="text-3xl">
                    Admin Dashboard
                </h1>
                <AccountButton/>
            </div>
        </>
    )
}