import React from 'react'
import { render } from '@testing-library/react'
import Widget from './Widget'
import { ThemeContextProvider } from '../../shared/context'

// Data Setup
const testUsername = 'test_username'
const testToken = 'test_token'

describe('<Landing />', () => {
  test(`should render a <div> username of ${testUsername} and a token of ${testToken}`, () => {
    const { container, getByText } = render(
      <ThemeContextProvider>
        <Widget username={testUsername} token={testToken} />
      </ThemeContextProvider>
    )
    expect(container.querySelector('div')).toBeInTheDocument()
    expect(getByText(`Username: ${testUsername}`)).toBeInTheDocument()
    expect(getByText(`Token: ${testToken}`)).toBeInTheDocument()
  })
})
