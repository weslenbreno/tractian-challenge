import { Container, Text } from "./styles";
import AssetIcon from 'src/assets/icons/cube.svg?react';

export default function AssetNotSelected() {
    return (
        <Container>
            <AssetIcon fill="#88929C" width={200} />
            <Text>
                Selecione um ativo para visualizar as informações
            </Text>
        </Container>
    )
}
