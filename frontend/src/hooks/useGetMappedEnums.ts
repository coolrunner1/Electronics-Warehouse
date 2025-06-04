import {EnumFromDB} from "../types/EnumFromDB.ts";
import {QueryKey, useQuery} from "@tanstack/react-query";
import {ValueLabel} from "../types/ValueLabel.ts";
import {useTranslation} from "react-i18next";
import {AxiosResponse} from "axios";

export const useGetMappedEnums = (queryFn: () => Promise<AxiosResponse>, queryKey: QueryKey) => {
    const {t} = useTranslation();

    const {data, isLoading, error} = useQuery({
        queryFn,
        queryKey
    });

    console.log(data);

    const mappedEnum: ValueLabel<string>[] = data?.data.map((item: EnumFromDB): ValueLabel<string> => ({
        value: item.unnest,
        label: t(item.unnest),
    })) ?? [];

    return { mappedEnum, isLoading, error };
}