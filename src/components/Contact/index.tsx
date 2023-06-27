import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { EditButton, SaveButton, DeleteCancelButton } from '../../styles'
import ContactClass from '../../models/Contact'
import { remove, edit } from '../../store/reducers/contacts'
import { Input, Info } from '../../styles'

type Props = ContactClass

const Contact = ({
  name: OriginalName,
  phone: OriginalPhone,
  email: OriginalEmail,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState(0)
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (OriginalName.length > 0) {
      setName(OriginalName)
    }

    if (OriginalPhone > 0) {
      setPhone(OriginalPhone)
    }

    if (OriginalEmail.length > 0) {
      setEmail(OriginalEmail)
    }
  }, [OriginalName, OriginalPhone, OriginalEmail])

  function cancelEditing() {
    setIsEditing(false)
    setName(OriginalName)
  }

  return (
    <S.Card>
      <div>
        {isEditing ? (
          <>
            <Info>
              <S.ContactIcon />
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Info>
            <Info>
              <S.PhoneIcon />
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(parseInt(e.target.value))}
              />
            </Info>
            <Info>
              <S.EmailIcon />
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Info>
          </>
        ) : (
          <>
            <Info>
              <S.ContactIcon />
              {OriginalName}
            </Info>
            <Info>
              <S.PhoneIcon />
              {OriginalPhone}
            </Info>
            <Info>
              <S.EmailIcon />
              {OriginalEmail}
            </Info>
          </>
        )}
      </div>
      <S.ActionBar>
        {isEditing ? (
          <>
            <SaveButton
              onClick={() => {
                dispatch(edit({ name, phone, email, id }))
                setIsEditing(false)
              }}
            >
              Salvar
            </SaveButton>
            <DeleteCancelButton onClick={cancelEditing}>
              Cancelar
            </DeleteCancelButton>
          </>
        ) : (
          <>
            <EditButton onClick={() => setIsEditing(true)}>Editar</EditButton>
            <DeleteCancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </DeleteCancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
export default Contact
