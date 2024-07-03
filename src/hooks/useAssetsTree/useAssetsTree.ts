import { AssetTree } from "src/services"
import { useCompany } from "../useCompany"

export function useAssetsTree(): AssetTree {
    const { assets, locations } = useCompany()
    return new AssetTree(locations, assets)
}
