import {Organization} from "../types/Organization.ts";
import {Supplier} from "../types/Supplier.ts";

export const suppliersToOrganizations = (suppliers: Supplier[]): Organization[] => {
    return suppliers.map((supplier: Supplier) => ({
        organization_id: supplier.supplier_id,
        name: supplier.name,
        phone_number: supplier.phone_number,
        address: supplier.address,
        email: supplier.email,
        city: supplier.city,
        region: supplier.region,
        country: supplier.country,
        postal_code: supplier.postal_code,
    }));
}