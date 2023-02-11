import Link from 'next/link'

import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  return (
    <S.Nav>
      <Link href="/profile/me" passHref legacyBehavior>
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.Link>
      </Link>

      <Link href="/profile/cards" passHref legacyBehavior>
        <S.Link isActive={activeLink === '/profile/cards'} title="My cards">
          <CreditCard size={24} />
          <span>My cards</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref legacyBehavior>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <FormatListBulleted size={24} />
          <span>My orders</span>
        </S.Link>
      </Link>

      <Link href="/logout" passHref legacyBehavior>
        <S.Link>
          <ExitToApp size={24} />
          <span>Sign out</span>
        </S.Link>
      </Link>
    </S.Nav>
  )
}

export default ProfileMenu
