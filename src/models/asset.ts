export type TSensorType = 'energy' | 'vibration'
export type TSensorStatus = 'operating' | 'alert'

export interface IAsset {
    id: string,
    name: string,
    parentId: string | null,
    sensorId: string,
    sensorType: TSensorType,
    status: TSensorStatus,
    gatewayId: string,
    locationId: string | null
}

export type TItemTypes = 'location' | 'asset' | 'component' | 'sublocation'
