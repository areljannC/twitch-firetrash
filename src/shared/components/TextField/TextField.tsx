import React, { FC, memo } from 'react'
import styled from 'styled-components'

// Types
type TextFieldProps = {
  name: string
  value: string
  onChange: any
}

type TextFieldWrapperProps = {}

// Component
const TextField: FC<TextFieldProps> = ({ name, value, onChange }) => {
  return <TextFieldWrapper type='text' name={name} value={value} onChange={onChange} />
}

// Styles
const TextFieldWrapper = styled.input``

// Display Names
TextField.displayName = `TextField`
TextFieldWrapper.displayName = `TextFieldWrapper`

export default memo<TextFieldProps>(TextField)
