import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/client'

async function protectedRoutes(context: GetServerSidePropsContext) {
  const session = await getSession(context)

  if (!session) {
    context.res.writeHead(302, {
      location: `/sign-in?callbackUrl=${context.resolvedUrl}`
    })
    context.res.end()
    // context.res.setHeader(
    //   'Location',
    //   `/sign-in?callbackUrl=${context.resolvedUrl}`
    // )
    // context.res.statusCode = 302
  }

  return session
}

export default protectedRoutes
