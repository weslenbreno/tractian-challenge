import { create } from 'zustand'
import { ITreeItem } from 'src/services';

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
}

export const useAppStore = create<AppStore>((set) => ({
    activeAsset: null,
    filters: {
        name: '',
        sensorType: '',
        status: '',
    },
    setActiveAsset: (asset: ITreeItem) => set(() => ({ activeAsset: asset })),
    setFilters: (newFilters) => set((state) => ({ filters: {...state.filters, ...newFilters  } }))
}))