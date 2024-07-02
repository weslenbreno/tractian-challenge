import { Container, Text } from "./styles";
import AssetIcon from 'src/assets/icons/cube.svg?react';

export default function AssetNotSelected() {
    return (
        <Container>
            <AssetIcon fill="#F2F8FF" width={200} />
            <Text>
                Selecione um ativo para visualizar as informações
            </Text>
        </Container>
    )
}
