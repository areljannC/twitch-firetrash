import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Type
type HeadingProps = {
  children: ReactNode
}

// Component
const Heading: FC<HeadingProps> = ({ children }) => (
  <HeadingWrapper>{children}</HeadingWrapper>
)

// Style
const HeadingWrapper = styled.h1`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes[4]};
  font-weight: ${({ theme }) => theme.fontWeights.heading};
  margin-top: 0;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: ${({ theme }) => theme.space[4]};
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[5]};
  }
  @media ${({ theme }) => theme.breakpoints.laptopLarge} {
    font-size: ${({ theme }) => theme.fontSizes[6]};
  }
`

// Display Name
Heading.displayName = `Heading`
HeadingWrapper.displayName = `HeadingWrapper`

export default memo<HeadingProps>(Heading)
