import React from 'react'
import { render } from '@testing-library/react'
import Widget from './Widget'
import { ThemeContextProvider } from '../../shared/context'

// Data Setup
const testUsername = 'test_username'
const testToken = 'test_token'

describe('<Landing />', () => {
  test(`should render a <div>`, () => {
    const { container, getByText } = render(
      <ThemeContextProvider>
        <Widget username={testUsername} encryptedToken={testToken} />
      </ThemeContextProvider>
    )
    expect(container.querySelector('div')).toBeInTheDocument()
  })
})
