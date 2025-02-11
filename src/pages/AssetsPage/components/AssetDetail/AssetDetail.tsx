import { useAppStore } from "src/store";
import { AddImageBox, AssetInfo, AssetInfoText, AssetInfoTitle, Container, Content, ImageBoxContent, Title } from "./styles";
import { getStatusIcon } from "src/ultils";
import InboxIcon from 'src/assets/icons/inbox.svg?react';
import AssetNotSelected from "../AssetNotSelected/AssetNotSelected";
import { TItemTypes, TSensorType } from "src/models/asset";
import LocationSelected from "../LocationSelected/LocationSelected";

const responsibleLabel = {
    energy: 'Elétrica',
    vibration: 'Mecânica',
}

export function AssetDetail() {
    const { activeAsset } = useAppStore()

    if (!activeAsset) return <AssetNotSelected />

    if(activeAsset.type === 'location' || activeAsset.type === 'sublocation') {
        return <LocationSelected item={activeAsset} />
    }

    function getInfo(info?: string) {
        return info ? info : '-'
    }   

    function getItemType (type: TItemTypes) {
        const componentTypeLabels: Record<TSensorType, string> = {
            energy: 'Motor Elétrico',
            vibration: 'Motor de Vibração',
        }

        return type === 'component' ?
            componentTypeLabels[activeAsset!.sensorType] : '-'
    }

    function addImage() {
        alert('API de upload de imagem não implementada')
    }

    return (
        <Container>
            <Title>{activeAsset.name}{getStatusIcon(activeAsset)}</Title>
            <Content>
                <AddImageBox onClick={addImage}>
                    <ImageBoxContent>
                        <InboxIcon />
                        <span>Adicionar imagem do Ativo</span>
                    </ImageBoxContent>
                </AddImageBox>
                <AssetInfo>
                    <AssetInfoTitle>Tipo de equipamento</AssetInfoTitle>
                    <AssetInfoText>{getItemType(activeAsset.type)}</AssetInfoText>
                </AssetInfo>
                <AssetInfo>
                    <AssetInfoTitle>Responsáveis</AssetInfoTitle>
                    <AssetInfoText>{getInfo(responsibleLabel[activeAsset.sensorType])}</AssetInfoText>
                </AssetInfo>
                <AssetInfo>
                    <AssetInfoTitle>Sensor</AssetInfoTitle>
                    <AssetInfoText>{getInfo(activeAsset.sensorId)}</AssetInfoText>
                </AssetInfo>
                <AssetInfo>
                    <AssetInfoTitle>Receptor</AssetInfoTitle>
                    <AssetInfoText>{getInfo()}</AssetInfoText>
                </AssetInfo>
            </Content>
        </Container>
    )
}
