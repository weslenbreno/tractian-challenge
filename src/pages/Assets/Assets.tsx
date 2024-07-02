import { PageLayout, TreeView } from 'src/components'
import { AssetsInfoContainer, AssetsTreeContainer, Section} from './styles'
import { useCompany } from 'src/hooks/useCompany'
import { AssetDetail } from './components/AssetDetail'
import AssetFilters from 'src/components/AssetFilters/AssetFilters'

export default function AssetsPage() {
    const { name } = useCompany()

    return (
        <PageLayout title='Ativos' companyName={name}>
            <Section>
                <AssetsTreeContainer>
                    <AssetFilters />
                    <TreeView />
                </AssetsTreeContainer>
            </Section>
            <Section>
                <AssetsInfoContainer>
                    <AssetDetail />
                </AssetsInfoContainer>
            </Section>
        </PageLayout>
    )
}
