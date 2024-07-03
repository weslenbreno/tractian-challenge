import { AppContainer, AppContent } from './styles'
import { Header } from './components'
import AssetsPage from './pages/AssetsPage/AssetsPage'

function App() {
  return (
    <>
      <Header />
      <AppContainer>
        <AppContent>
          <AssetsPage />
        </AppContent>
      </AppContainer>
    </>
  )
}

export default App
