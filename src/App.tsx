import { AppContainer, AppContent } from './styles'
import { Header } from './components'
import AssetsPage from './pages/Assets/Assets'

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
