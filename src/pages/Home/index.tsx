import AddButton from '../../components/AddButton'
import ContactList from '../../containers/ContactList'
import Sidebar from '../../containers/Sidebar'

const Home = () => (
  <>
    <Sidebar showSearchBar />
    <ContactList />
    <AddButton />
  </>
)

export default Home
