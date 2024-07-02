import { useCompanyStore } from "src/store";
import { useShallow } from 'zustand/react/shallow'

export function useCompany() {
    const { companyId, name, assets, locations, setUpAssets, setCompany, resetCompany } = useCompanyStore(
        useShallow(state => ({
            companyId: state.id,
            name: state.name,
            assets: state.assets,
            locations: state.locations,
            setUpAssets: state.setUpAssets,
            setCompany: state.setCompany,
            resetCompany: state.resetCompany
        })))

    return { companyId, name, assets, locations, setCompany, resetCompany, setUpAssets };
}
