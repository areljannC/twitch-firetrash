import React, { FC, ReactNode, MouseEvent, memo } from 'react'
import styled from 'styled-components'

// Types
type ButtonProps = {
  children: ReactNode
  width?: string
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

type ButtonWrapperProps = {
  width: string
}

// Components
const Button: FC<ButtonProps> = ({
  children,
  width = 'auto',
  onClick = () => {},
  disabled = false
}) => (
  <ButtonWrapper width={width} onClick={onClick} disabled={disabled}>
    {children}
  </ButtonWrapper>
)

// Styles
const ButtonWrapper = styled.button<ButtonWrapperProps>`
  width: ${({ width }) => width};
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.primary};
  border-width: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray};
    cursor: not-allowed;
  }
`

// Display Names
Button.displayName = `Button`
ButtonWrapper.displayName = `ButtonWrapper`

export default memo(Button)
