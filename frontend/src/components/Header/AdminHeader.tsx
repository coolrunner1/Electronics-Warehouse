import {AdminButton} from "./AdminButton.tsx";
import {AccountButton} from "./AccountButton.tsx";
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
                <AccountButton location={'/admin/account'}/>
                <LanguageSelector/>
            </div>
        </div>
    )
}