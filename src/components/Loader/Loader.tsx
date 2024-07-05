import { PageContainer, LoaderStyled } from './styles'

type LoaderProps = {
    message?: string
}

export function Loader({ message }: LoaderProps) {
    return (
        <PageContainer>
            <LoaderStyled />
            <p>{message}</p>
        </PageContainer>
    )
}
