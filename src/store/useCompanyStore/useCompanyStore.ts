import { create } from 'zustand'
import { ICompany, IAsset, ILocation } from 'src/models'

type SetUpAssetsParams = {
    assets?: IAsset[];
    locations?: ILocation[];
}

type CompanyStore = {
    setCompany: (company: ICompany) => void; 
    setUpAssets: (params: SetUpAssetsParams) => void;
    resetCompany: () => void;
    assets: IAsset[];
    locations: ILocation[];
} & ICompany

export const useCompanyStore = create<CompanyStore>((set) => ({
    id: null,
    name: null,
    assets: [],
    locations: [],
    setUpAssets: ({assets = [], locations = []} : SetUpAssetsParams) => set(() => ({ assets, locations })),
    setCompany: ({ id, name  }: ICompany) => set(() => ({ id, name })),
    resetCompany: () => set(() => ({ id: null, name: null })),
}))