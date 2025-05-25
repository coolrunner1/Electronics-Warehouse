import {Table, Tbody, Th, Thead, Tr} from "react-super-responsive-table";
import {NewRemoveButtons} from "../Global/NewRemoveButtons";
import {OrganizationsEntry} from "./OrganizationsEntry";
import {useEffect, useState} from "react";
import {Organization} from "../../types/Organization";
import {useTranslation} from "react-i18next";

export const OrganizationsTable = (
    props: {
        organizations: Organization[],
        organizations_type: string,
    }
) => {
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const {t} = useTranslation();

    useEffect(() => {
        setOrganizations(props.organizations);
    }, [props.organizations]);

    const onNewClick = () => {
        if (organizations[0].organization_id === 99999) {
            setOrganizations(organizations.splice(1))
            return;
        }
        setOrganizations([{
            organization_id: 99999,
            name: "Example Name",
            phone_number: 777777777,
            address: "123 Example St",
            email: "example@example.com",
            city: "Example City",
            region: "Example Region",
            country: "Example Country",
            postal_code: 999999
        }, ...props.organizations]);
    }

    return (
        <>
            <Table className="w-full text-md shadow-md rounded mb-4">
                <Thead>
                    <Tr className="border-b">
                        {
                            [t('organization-name'), 'Email', t('phone-number'), t('address'), t('city'), t('region'), t('country'), t('postal-code')]
                                .map((item, index) => (<Th key={index}>{item}</Th>))
                        }
                        <Th>
                            {organizations.length > 0 && (<NewRemoveButtons id={organizations[0].organization_id} onNewClick={onNewClick} />)}
                        </Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {organizations.map((organization) => (
                        <OrganizationsEntry organization={organization} organization_id={organization.organization_id} organization_type={props.organizations_type} key={organization.organization_id}/>
                    ))}
                </Tbody>
            </Table>
        </>
    )
}