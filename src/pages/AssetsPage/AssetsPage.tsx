import { useEffect } from 'react'
import { AssetFilters, Loader, PageLayout, TreeView } from 'src/components'
import { AssetsTreeContainer, Section } from './styles'
import { useCompany } from 'src/hooks/useCompany'
import { AssetDetail } from './components/AssetDetail'
import { useAppStore } from 'src/store'
import { useFetchAllCompanies } from 'src/queries'
import { AssetsPageError } from './components'

export default function AssetsPage() {
    const { data, isLoading, isError } = useFetchAllCompanies();
    const { companyId, setCompany } = useCompany()
    const { name } = useCompany()
    const { setCompanies, isLoading: isLoadingAssets } = useAppStore()

    useEffect(() => {
        if (data) {
            setCompanies(data)
        }
    }, [data, setCompanies])

    useEffect(() => {
        if (data && companyId === null) {
            setCompany(data[0])
        }
    }, [data, companyId, setCompany])

    if (isLoading) return <Loader message='Carregando...' />
    if (isError) return <AssetsPageError />

    return (
        <PageLayout title='Ativos' companyName={name}>
            <Section>
                {isLoadingAssets ? <Loader message='Carregando ativos...' /> : (
                    <AssetsTreeContainer>
                        <AssetFilters />
                        <TreeView />
                    </AssetsTreeContainer>
                )}
            </Section>
            <Section>
                <AssetDetail />
            </Section>
        </PageLayout>
    )
}
