import LocationIcon from 'src/assets/icons/location.svg?react';
import AssetIcon from 'src/assets/icons/cube.svg?react';
import ComponentIcon from 'src/assets/icons/component.svg?react';
import { TItemTypes } from 'src/models/asset';

export function getAssetIcon(type: TItemTypes) {
    if (type === 'location') {
        return <LocationIcon width={22} height={22} fill="#2188FF"/>
    }
    return type === 'component' ? <ComponentIcon /> : <AssetIcon width={20} fill='#2188FF'/>
}

