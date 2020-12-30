import React, { FC, ReactNode, ChangeEvent, memo } from 'react'
import styled from 'styled-components'

// Types
type TextFieldProps = {
  children: ReactNode
  width?: string
}

type TextFieldLabelProps = {
  children: ReactNode
  hasError?: boolean
}

type TextFieldInputProps = {
  name: string
  value: string
  placeholder?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  hasError?: boolean
}

type TextFieldWrapperProps = {
  width: string
}

type TextFieldLabelWrapperProps = {
  hasError: boolean
}

type TextFieldInputWrapperProps = {
  hasError: boolean
}

// Components
const TextField: FC<TextFieldProps> = memo(({ width = 'auto', children }) => (
  <TextFieldWrapper width={width}>{children}</TextFieldWrapper>
))

const TextFieldLabel: FC<TextFieldLabelProps> = memo(
  ({ children, hasError = false }) => (
    <TextFieldLabelWrapper hasError={hasError}>
      {children}
    </TextFieldLabelWrapper>
  )
)

const TextFieldInput: FC<TextFieldInputProps> = memo(
  ({ name, value, placeholder, onChange = () => {}, hasError = false }) => (
    <TextFieldInputWrapper
      type='text'
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      hasError={hasError}
    />
  )
)

// Styles
const TextFieldWrapper = styled.div<TextFieldWrapperProps>`
  width: ${({ width }) => width};
  margin-bottom: ${({ theme }) => theme.space[3]};
  display: flex;
  flex-direction: column;
`

const TextFieldLabelWrapper = styled.label<TextFieldLabelWrapperProps>`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.space[1]};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  color: ${({ hasError, theme }) =>
    hasError ? theme.colors.secondary : theme.colors.text};
`

const TextFieldInputWrapper = styled.input<TextFieldInputWrapperProps>`
  width: 100%;
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.text};
  border-style: solid;
  border-color: ${({ hasError, theme }) =>
    hasError ? theme.colors.secondary : theme.colors.primary};
  border-width: ${({ theme }) => theme.borderWidth};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.font};
  font-size: ${({ theme }) => theme.fontSizes[2]};
  color: ${({ theme }) => theme.colors.background};
`

// Display Names
TextField.displayName = `TextField`
TextFieldLabel.displayName = `TextFieldLabel`
TextFieldInput.displayName = `TextFieldInput`
TextFieldWrapper.displayName = `TextFieldWrapper`
TextFieldLabelWrapper.displayName = `TextFieldLabelWrapper`
TextFieldInputWrapper.displayName = `TextFieldInputWrapper`

export { TextField, TextFieldLabel, TextFieldInput }
