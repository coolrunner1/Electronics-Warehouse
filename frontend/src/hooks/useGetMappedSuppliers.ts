import {ValueLabel} from "../types/ValueLabel.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchSuppliers} from "../api/suppliers.ts";


export const useGetMappedSuppliers = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['suppliers', undefined, 'none'],
        queryFn: fetchSuppliers,
    });

    const mapped: ValueLabel[] = data?.suppliers?.map((supplier) => ({
        value: supplier.organization_id,
        label: supplier.name,
    })) ?? [];

    return { suppliers: mapped, isLoading, error };
};