import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from 'utils/test-utils'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the form', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /sign up now/i })
    ).toBeInTheDocument()
  })

  it('should render text and link to sign in', () => {
    render(
      <MockedProvider>
        <FormSignUp />
      </MockedProvider>
    )

    expect(screen.getByRole('link', { name: /sign in/i })).toBeInTheDocument()
    expect(screen.getByText(/Already have an account\?/i)).toBeInTheDocument()
  })
})
