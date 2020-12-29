import React, { ReactNode, FC, memo } from 'react'
import styled from 'styled-components'

// Type
type FlexProps = {
  children: ReactNode
  width?: string
  height?: string
  flexDirection?: string
  justifyContent?: string
  alignItems?: string
}

type FlexWrapperProps = {
  width: string
  height: string
  flexDirection: string
  justifyContent: string
  alignItems: string
}

// Component
const Flex: FC<FlexProps> = ({
  children,
  width = '100%',
  height = '100%',
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center'
}) => (
  <FlexWrapper
    width={width}
    height={height}
    flexDirection={flexDirection}
    justifyContent={justifyContent}
    alignItems={alignItems}
  >
    {children}
  </FlexWrapper>
)

// Style
const FlexWrapper = styled.div<FlexWrapperProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  display: flex;
`

// Display Names
Flex.displayName = `Flex`
FlexWrapper.displayName = `FlexWrapper`

export default memo<FlexProps>(Flex)
