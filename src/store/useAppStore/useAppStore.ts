import { create } from 'zustand'
import { ITreeItem } from 'src/services';
import { ICompany } from 'src/models';

type TFIlters = {
    name?: string;
    sensorType?: string;
    status?: string;
}

type AppStore = {
    activeAsset: ITreeItem | null;
    setActiveAsset: (asset: ITreeItem) => void;
    filters: TFIlters;
    setFilters: (filters: TFIlters) => void;
    isLoading: boolean;
    hasError: boolean;
    setIsLoading: (isLoading: boolean) => void;
    companies: ICompany[];
    setCompanies: (companies: ICompany[]) => void;
}

export const useAppStore = create<AppStore>((set) => ({
    companies: [],
    activeAsset: null,
    filters: {
        name: '',
        sensorType: '',
        status: '',
    },
    isLoading: false,
    hasError: false,
    setActiveAsset: (asset: ITreeItem) => set(() => ({ activeAsset: asset })),
    setFilters: (newFilters) => set((state) => ({ filters: {...state.filters, ...newFilters  } })),
    setIsLoading: (isLoading) => set(() => ({ isLoading })),
    setCompanies: (companies) => set(() => ({ companies })),
}))