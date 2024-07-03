import { ITreeItem } from "src/services";
import { Container, Text } from "./styles";
import Location from 'src/assets/icons/location.svg?react';

type LocationSelectedProps = {
    item: ITreeItem
}

export default function LocationSelected({ item }: LocationSelectedProps) {
    return (
        <Container>
            <Location fill="#88929C" width={200} />
            <Text>
                {item.name}
            </Text>
        </Container>
    )
}
