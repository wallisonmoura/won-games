import Button from 'components/Button'
import Heading from 'components/Heading'
import TextField from 'components/TextField'
import Link from 'next/link'

import * as S from './styles'

export type FormProfileProps = {
  username?: string
  email?: string
}

const FormProfile = ({ username, email }: FormProfileProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black" size="small">
        My Profile
      </Heading>

      <S.Form>
        <TextField
          name="username"
          placeholder="Username"
          label="Username"
          initialValue={username}
        />

        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          initialValue={email}
          label="E-mail"
          disabled
        />
        <S.ButtonContainer>
          <Link
            href={`/forgot-password?email=${email}`}
            passHref
            legacyBehavior
          >
            <Button minimal size="medium" as="a">
              Reset password
            </Button>
          </Link>

          <Button size="medium">Save</Button>
        </S.ButtonContainer>
      </S.Form>
    </S.Wrapper>
  )
}

export default FormProfile
