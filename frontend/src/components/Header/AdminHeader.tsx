import {AdminButton} from "../Global/AdminButton";
import {AccountButton} from "../Global/AccountButton";

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