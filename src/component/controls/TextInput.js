import { TextField } from '@material-ui/core'
import React from 'react'

function TextInput(props) {
  const { name, label, value, onChange } = props
  return (
    <TextField
      variant='outlined'
      name={name}
      label={label}
      value={value}
      onChange={onChange}
    />
  )
}

export default TextInput
