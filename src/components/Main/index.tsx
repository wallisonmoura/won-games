import * as S from './styles'

const Main = ({
  title = 'React com Nextjs',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Image de um átomo e React avançado" />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      <S.Illustration
        src="/img/developer.svg"
        alt="Um desenvolvedor de frente para tela com código"
      />
    </S.Wrapper>
  )
}

export default Main
