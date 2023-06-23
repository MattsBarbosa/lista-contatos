import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import ContactClass from '../../models/Contact'
import { remove, edit } from '../../store/reducers/contacts'
import { Input } from '../../styles'

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
            <S.Info>
              <S.ContactIcon />
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </S.Info>
            <S.Info>
              <S.PhoneIcon />
              <Input
                type="number"
                value={phone}
                onChange={(e) => setPhone(parseInt(e.target.value))}
              />
            </S.Info>
            <S.Info>
              <S.EmailIcon />
              <Input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </S.Info>
          </>
        ) : (
          <>
            <S.Info>
              <S.ContactIcon />
              {OriginalName}
            </S.Info>
            <S.Info>
              <S.PhoneIcon />
              {OriginalPhone}
            </S.Info>
            <S.Info>
              <S.EmailIcon />
              {OriginalEmail}
            </S.Info>
          </>
        )}
      </div>
      <S.ActionBar>
        {isEditing ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(edit({ name, phone, email, id }))
                setIsEditing(false)
              }}
            >
              Salvar
            </S.SaveButton>
            <S.DeleteCancelButton onClick={cancelEditing}>
              Cancelar
            </S.DeleteCancelButton>
          </>
        ) : (
          <>
            <S.EditButton onClick={() => setIsEditing(true)}>
              Editar
            </S.EditButton>
            <S.DeleteCancelButton onClick={() => dispatch(remove(id))}>
              Remover
            </S.DeleteCancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}
export default Contact
