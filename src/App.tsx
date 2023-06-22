import { Provider } from 'react-redux'
import Sidebar from './containers/Sidebar'
import ContactList from './containers/ContactList'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <ContactList />
      </Container>
    </Provider>
  )
}

export default App
