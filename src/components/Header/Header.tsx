import { useFetchAssets } from "src/queries";
import { CompanyButon, CompanyButonsContainer, HeaderContainer } from "./styles";
import { ICompany } from "src/models";
import { useCompany } from "src/hooks/useCompany";
import { useEffect } from "react";
import { useAppStore } from "src/store";
import logo from "src/assets/logo.svg";
import CompanyIcon from "src/assets/icons/company.svg?react";

export function Header() {
  const { setCompany, resetCompany, companyId, setUpAssets } = useCompany();
  const { data: companyAssetsData, refetch: refetchAssets, isFetching } = useFetchAssets(companyId);
  const { companies, setIsLoading } = useAppStore();

  useEffect(() => {
    if (companyId) refetchAssets();
  }, [companyId, refetchAssets]);

  useEffect(() => {
    if (companyAssetsData) {
      setUpAssets({ assets: companyAssetsData.assets, locations: companyAssetsData.locations });
    }
  }, [companyAssetsData]);

  useEffect(() => {
    if (isFetching) {
      setIsLoading(isFetching)
    } else {
      setTimeout(() => {
        setIsLoading(isFetching);
      }, 300);
    }
  }, [isFetching]);

  function toggleSelectedCompany(company: ICompany) {
    if (companyId === company.id) {
      return resetCompany();
    }
    setCompany(company);
  }

  return (
    <HeaderContainer>
      <img src={logo} alt="Tractian Logo" height={14} />
      <CompanyButonsContainer>
        {companies.map((companyItem) => (
          <CompanyButon
            onClick={() => toggleSelectedCompany(companyItem)}
            key={companyItem.id}
            active={companyId === companyItem.id}><CompanyIcon />{companyItem.name}</CompanyButon>
        ))}
      </CompanyButonsContainer>
    </HeaderContainer>
  )
}
