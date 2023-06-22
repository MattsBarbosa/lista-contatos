import * as S from './styles'

const Contact = () => (
  <S.Card>
    <div>
      <S.Info>
        <S.ContactIcon />
        Matheus A Barbosa
      </S.Info>
      <S.Info>
        <S.PhoneIcon />
        (47) 91268180
      </S.Info>
      <S.Info>
        <S.EmailIcon />
        matts.barbosa@gmail.com
      </S.Info>
    </div>
    <S.ActionBar>
      <S.Button>Editar</S.Button>
      <S.Button>Remover</S.Button>
    </S.ActionBar>
  </S.Card>
)
export default Contact
