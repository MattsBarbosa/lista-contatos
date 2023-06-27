import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import * as S from '../../styles'
import { ActionBar, NewCard } from './styles'
import { createNewContact } from '../../store/reducers/contacts'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleClick = () => navigate('/')

  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState('')

  const NewContact = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      createNewContact({
        name,
        phone,
        email
      })
    )
    navigate('/')
  }

  return (
    <S.MainContainer>
      <S.Title>Adicionar novo contato</S.Title>
      <NewCard onSubmit={NewContact}>
        <S.Info as="label" htmlFor="nome">
          Nome
        </S.Info>
        <S.Input
          value={name}
          onChange={({ target }) => setName(target.value)}
          type="text"
          id="nome"
        />
        <S.Info as="label" htmlFor="telefone">
          Telefone
        </S.Info>
        <S.Input
          value={phone === 0 ? '' : phone}
          onChange={({ target }) => setPhone(parseInt(target.value))}
          type="number"
          id="telefone"
        />
        <S.Info as="label" htmlFor="email">
          Email
        </S.Info>
        <S.Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          type="text"
          id="email"
        />
        <ActionBar>
          <S.SaveButton type="submit">Cadastrar</S.SaveButton>
          <S.DeleteCancelButton onClick={handleClick}>
            Cancelar
          </S.DeleteCancelButton>
        </ActionBar>
      </NewCard>
    </S.MainContainer>
  )
}

export default Form
