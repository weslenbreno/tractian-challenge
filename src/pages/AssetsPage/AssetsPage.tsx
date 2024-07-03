import { useEffect } from 'react'
import { AssetFilters, PageLayout, TreeView } from 'src/components'
import { AssetsTreeContainer, Section } from './styles'
import { useCompany } from 'src/hooks/useCompany'
import { AssetDetail } from './components/AssetDetail'
import { useAppStore } from 'src/store'
import { useFetchAllCompanies } from 'src/queries'
import { AssetsPageError, AssetsPageLoading } from './components'

export default function AssetsPage() {
    const { data, isLoading, isError } = useFetchAllCompanies();
    const { companyId, setCompany } = useCompany()
    const { name } = useCompany()
    const { setCompanies } = useAppStore()

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

    if (isLoading) return <AssetsPageLoading />
    if (isError) return <AssetsPageError />

    return (
        <PageLayout title='Ativos' companyName={name}>
            <Section>
                <AssetsTreeContainer>
                    <AssetFilters />
                    <TreeView />
                </AssetsTreeContainer>
            </Section>
            <Section>
                <AssetDetail />
            </Section>
        </PageLayout>
    )
}
