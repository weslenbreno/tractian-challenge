import { IAsset } from "src/models"

export type TTreeItemType = 'location' | 'asset' | 'component' | 'sublocation'

export interface ITreeItem extends IAsset {
    children: ITreeItem[]
    type: TTreeItemType
}