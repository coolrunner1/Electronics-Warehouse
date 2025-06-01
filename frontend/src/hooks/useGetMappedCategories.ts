import {getCategories} from "../api/categories.ts";
import {useTranslation} from "react-i18next";
import {Category} from "../types/Category.ts";
import {ValueLabel} from "../types/ValueLabel.ts";
import {useQuery} from "@tanstack/react-query";


export const useGetMappedCategories = () => {
    const { i18n } = useTranslation();

    const { data, isLoading, error } = useQuery<Category[]>({
        queryKey: ['categories'],
        queryFn: getCategories,
    });

    const mappedCategories: ValueLabel[] = data?.map((category) => ({
        value: category.category_id,
        label: i18n.language === 'ru' ? category.nameRU : category.nameEN,
    })) ?? [];

    const mappedSubcategories: ValueLabel[] = data?.flatMap((category) =>
        category.subcategories?.map((sub) => ({
            value: sub.category_id,
            label: i18n.language === 'ru' ? sub.nameRU : sub.nameEN,
        })) ?? []
    ) ?? [];

    const mapped = [...mappedCategories, ...mappedSubcategories].sort((a, b) => a.value - b.value) ?? [];

    return { categories: mapped, isLoading, error };
};