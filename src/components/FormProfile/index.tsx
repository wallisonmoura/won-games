import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import * as S from './styles'

const FormProfile = () => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black" size="small">
        My Profile
      </Heading>

      <S.Form>
        <TextField
          name="name"
          placeholder="Name"
          label="Name"
          initialValue="Wallison"
        />

        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue="wallison@mail.com"
          label="E-mail"
          disabled
        />

        <TextField
          name="password"
          type="password"
          placeholder="Type your password"
          label="Password"
        />

        <TextField
          name="new_password"
          type="password"
          placeholder="New password"
          label="New Password"
        />

        <Button size="large">Save</Button>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormProfile
