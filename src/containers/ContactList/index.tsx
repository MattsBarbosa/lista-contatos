import { useSelector } from 'react-redux'
import Contact from '../../components/Contact'
import { MainContainer, Title } from '../../styles'
import { RootReducer } from '../../store'

const ContactList = () => {
  const { items } = useSelector((state: RootReducer) => state.contacts)

  return (
    <MainContainer>
      <Title>Meus Contatos</Title>
      <ul>
        {items.map((c) => (
          <li key={c.name}>
            <Contact name={c.name} phone={c.phone} email={c.email} id={c.id} />
          </li>
        ))}
      </ul>
    </MainContainer>
  )
}

export default ContactList
