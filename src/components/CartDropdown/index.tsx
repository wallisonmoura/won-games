import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'

import { useCart } from 'hooks/use-cart'
import * as S from './styles'

const CartDropdown = () => {
  const { items, total } = useCart()
  return (
    <S.Wrapper>
      <Dropdown title={<CartIcon />}>
        <CartList hasButton />
      </Dropdown>
    </S.Wrapper>
  )
}

export default CartDropdown
