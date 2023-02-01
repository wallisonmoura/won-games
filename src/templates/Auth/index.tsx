import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Logo />

          <div>
            <Heading>All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>Won</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>

          <S.Footer>Won games 2023 c Todos os Direitos Reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Logo color="black" size="large" />

          <Heading color="black" lineColor="secondary" lineLeft>
            {title}
          </Heading>
          {children}
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  )
}

export default Auth
