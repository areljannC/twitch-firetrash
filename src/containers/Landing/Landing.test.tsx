import React from 'react'
import { render } from '@testing-library/react'
import Landing from './Landing'
import { ThemeContextProvider } from '../../shared/context'

describe('<Landing />', () => {
  test(`should render a <div> and a text saying, "Twitch FireTrash"`, () => {
    const { container, getByText } = render(
      <ThemeContextProvider>
        <Landing />
      </ThemeContextProvider>
    )
    expect(container.querySelector('div')).toBeInTheDocument()
    expect(getByText(`Twitch FireTrash`)).toBeInTheDocument()
  })
})
