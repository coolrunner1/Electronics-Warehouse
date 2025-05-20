import {Organization} from "../types/Organization.ts";
import {Client} from "../types/Client.ts";

export const clientsToOrganizations = (clients: Client[]): Organization[] => {
    return clients.map((client: Client) => ({
        organization_id: client.client_id,
        name: client.name,
        phone_number: client.phone_number,
        address: client.address,
        email: client.email,
        city: client.city,
        region: client.region,
        country: client.country,
        postal_code: client.postal_code,
    }));
}