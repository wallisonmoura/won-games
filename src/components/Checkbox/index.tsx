import * as S from './styles'

const Checkbox = () => {
  return (
    <S.Wrapper>
      <input id="action" type="checkbox" />
      <label htmlFor="action">Action</label>
    </S.Wrapper>
  )
}

export default Checkbox
