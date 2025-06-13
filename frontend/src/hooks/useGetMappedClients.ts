import {ValueLabel} from "../types/ValueLabel.ts";
import {useQuery} from "@tanstack/react-query";
import {fetchClients} from "../api/clients.ts";

export const useGetMappedClients = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['clients', undefined, 'none'],
        queryFn: fetchClients,
    });

    const mapped: ValueLabel<number>[] = data?.clients?.map((client) => ({
        value: client.organization_id,
        label: client.name,
    })) ?? [];

    return { clients: mapped, isLoading, error };
};