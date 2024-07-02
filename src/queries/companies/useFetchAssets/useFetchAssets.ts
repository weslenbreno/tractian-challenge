import { useQuery } from "@tanstack/react-query";
import { IAsset, ILocation } from "src/models";
import apiClient from "src/config/apiClient";

type FetchAssetsResponse = {
    assets: IAsset[];
    locations: ILocation[];
}

export async function getAssets(companyId: string | null): Promise<IAsset[]> {
    const { data } = await apiClient.get(`/companies/${companyId}/assets`)
    return data;
}

export async function getLocations(companyId: string | null): Promise<ILocation[]> {
    const { data } = await apiClient.get(`/companies/${companyId}/locations`)
    return data;
}

async function getCompanyAssets(companyId: string | null) {
    return Promise.all([
        getAssets(companyId),
        getLocations(companyId)
    ]).then(([assets, locations]) => {
        return { assets, locations }
    }).catch(() => {
        return { assets: [], locations: [] }
    })
}

export function useFetchAssets(companyId: string | null) {
    return useQuery<FetchAssetsResponse>({
        queryKey: ['getAssets'],
        queryFn: () => getCompanyAssets(companyId),
        enabled: !!companyId,
    });
}
