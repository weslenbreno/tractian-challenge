import { PageContainer, Loader } from './styles'

export function AssetsPageLoading() {
    return (
        <PageContainer>
            <Loader />
            <p>Carregando...</p>
        </PageContainer>
    )
}
