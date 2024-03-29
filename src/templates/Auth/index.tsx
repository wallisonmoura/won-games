import Link from 'next/link'

const currentYear = new Date().getFullYear()

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as S from './styles'
import Image from 'next/legacy/image'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <Image
          src="/img/auth-bg.jpg"
          alt="Won Games Auth Page"
          layout="fill"
          objectFit="cover"
        />
        <S.BannerContent>
          <Link href="/" legacyBehavior>
            <a>
              <Logo id="banner" />
            </a>
          </Link>

          <div>
            <Heading size="huge">All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WON</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>

          <S.Footer>
            Won Games {currentYear}© Todos os Direitos Reservados
          </S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href="/" legacyBehavior>
            <a>
              <Logo id="content" color="black" size="large" />
            </a>
          </Link>
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
