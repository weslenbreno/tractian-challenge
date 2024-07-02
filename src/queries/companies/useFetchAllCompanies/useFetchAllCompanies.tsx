import { useQuery } from "@tanstack/react-query";
import apiClient from "src/config/apiClient";

export type GetCompaniesResponse = {
    id: string;
    name: string;
}

async function getCompanies(): Promise<GetCompaniesResponse[]> {
    const { data } = await apiClient.get('/companies')
    return data;
}

export function useFetchAllCompanies() {
    return useQuery<GetCompaniesResponse[]>({
        queryKey: ['getCompanies'],
        queryFn: () => getCompanies(),
    });
}
