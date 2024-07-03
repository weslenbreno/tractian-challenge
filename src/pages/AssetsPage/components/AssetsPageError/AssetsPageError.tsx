import { PageContainer } from './styles'
import ErrorIcon from 'src/assets/icons/error.svg?react'

export function AssetsPageError() {
    return (
        <PageContainer>
            <ErrorIcon width={150} />
            <p>Houve um erro inesperado :/</p>
        </PageContainer>
    )
}
