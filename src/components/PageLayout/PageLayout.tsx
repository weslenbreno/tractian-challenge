import { PageSection, PageContainer, PageSectionContainer, PageHeader, PageTitle } from "./styles";

type PageLayoutProps = {
    children: React.ReactNode[],
    title: string,
    companyName: string | null,
}

export function PageLayout({ title, companyName, children }: PageLayoutProps) {
    return (
        <PageContainer>
            <PageHeader>
                <PageTitle>{title}{companyName && <small> / {companyName}</small>}</PageTitle>
            </PageHeader>
            <PageSectionContainer>
                {children.map((child, index) => (
                    <PageSection key={index}>{child}</PageSection>
                ))}
            </PageSectionContainer>
        </PageContainer>
    )
}
