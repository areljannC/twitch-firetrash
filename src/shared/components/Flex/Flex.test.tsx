import React from 'react'
import { render } from '@testing-library/react'
import Flex from './Flex'
import { ThemeContextProvider } from '../../context'

describe('<Flex />', () => {
  test(`should render a <div> and a text saying, "wrapped in a flex"`, () => {
    const { container, getByText } = render(
      <ThemeContextProvider>
        <Flex>
          <p>wrapped in a flex</p>
        </Flex>
      </ThemeContextProvider>
    )
    expect(container.querySelector('div')).toBeInTheDocument()
    expect(getByText(`wrapped in a flex`)).toBeInTheDocument()

  })
})
