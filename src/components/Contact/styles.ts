import {
  BsEnvelopeAtFill,
  BsFillPersonFill,
  BsFillTelephoneFill
} from 'react-icons/bs'
import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  background-color: #f4e6e6;
  border-radius: 50px;
  height: 148px;
  margin-left: 78px;
  padding: 16px;
  width: 638px;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
`
export const Info = styled.p`
  display: flex;
  align-items: center;
  font-size: 23px;
  padding: 5px;
`

export const ContactIcon = styled(BsFillPersonFill)`
  font-size: 28px;
  margin-right: 10px;
`
export const PhoneIcon = styled(BsFillTelephoneFill)`
  font-size: 24px;
  margin-right: 10px;
`
export const EmailIcon = styled(BsEnvelopeAtFill)`
  font-size: 24px;
  margin-right: 10px;
`

export const ActionBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 60px;
`

export const EditButton = styled.button`
  margin: 10px;
  padding: 8px 28px;
  border-radius: 50px;
  border: none;
  background-color: #d2d457;
  font-weight: bold;
  cursor: pointer;
`
export const SaveButton = styled(EditButton)`
  background-color: #33cd1a;
`

export const DeleteCancelButton = styled(EditButton)`
  background-color: #d45757;
`
