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
  const { data: companyAssetsData, refetch: refetchAssets } = useFetchAssets(companyId);
  const { companies } = useAppStore();

  useEffect(() => {
    if(companyId) refetchAssets();
  }, [companyId, refetchAssets]);

  function toggleSelectedCompany(company: ICompany) {
    if (companyId === company.id) {
      return resetCompany();
    }
    setCompany(company);
  }

  if(companyAssetsData) {
    setUpAssets({ assets: companyAssetsData.assets, locations: companyAssetsData.locations });
  }
  
  return (
    <HeaderContainer>
        <img src={logo} alt="Tractian Logo" height={14}/>
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
