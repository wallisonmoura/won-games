import { signOut } from 'next-auth/client'
import { useRouter } from 'next/router'
import Link from 'next/link'

import {
  AccountCircle,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => {
  const { push } = useRouter()
  return (
    <S.Nav>
      <Link href="/profile/me" passHref legacyBehavior>
        <S.Link isActive={activeLink === '/profile/me'} title="My profile">
          <AccountCircle size={24} />
          <span>My profile</span>
        </S.Link>
      </Link>

      <Link href="/profile/orders" passHref legacyBehavior>
        <S.Link isActive={activeLink === '/profile/orders'} title="My orders">
          <FormatListBulleted size={24} />
          <span>My orders</span>
        </S.Link>
      </Link>

      <S.Link
        role="button"
        onClick={async () => {
          const data = await signOut({ redirect: false, callbackUrl: '/' })
          push(data.url)
        }}
      >
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.Link>
    </S.Nav>
  )
}

export default ProfileMenu
