import {AdminButton} from "../Global/AdminButton";
import {AccountButton} from "../Global/AccountButton";
import {useTranslation} from "react-i18next";
import {LanguageSelector} from "../Global/LanguageSelector.tsx";

export const AdminHeader = () => {
    const {t} = useTranslation();

    return (
        <div className="p-4 flex justify-between">
            <AdminButton/>
            <h1 className="text-3xl">
                {t('admin-dashboard')}
            </h1>
            <div>
                <AccountButton/>
                <LanguageSelector/>
            </div>
        </div>
    )
}