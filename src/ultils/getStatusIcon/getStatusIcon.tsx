import EnergyIcon from 'src/assets/icons/energy.svg?react';
import Critical from 'src/assets/icons/critical.svg?react';
import { ITreeItem } from 'src/services';
import { TItemTypes } from 'src/models/asset';

export function getStatusIcon(node: ITreeItem) {
    const assetsTypes: TItemTypes[] = ['asset', "component"]

    if (!assetsTypes.includes(node.type)) return null

    if (node?.status === 'operating') {
        return <EnergyIcon />
    }
    
    return <Critical />
}
