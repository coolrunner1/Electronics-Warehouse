import {ValueLabel} from "../types/ValueLabel.ts";
import {useQuery} from "@tanstack/react-query";
import {getUserRoles} from "../api/users.ts";
import {Role} from "../types/Role.ts";

export const useGetMappedRoles = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['roles'],
        queryFn: getUserRoles,
    });

    const mapped: ValueLabel<number>[] = data?.data?.map((role: Role) => ({
        value: role.role_id,
        label: role.name,
    })) ?? [];

    return { roles: mapped, isLoading, error };
};