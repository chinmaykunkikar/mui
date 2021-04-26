import { TextField } from '@material-ui/core'
import React from 'react'

function TextInput(props) {
  const { name, label, value, onChange, error = null, helperText } = props
  return (
    <TextField
      variant='outlined'
      name={name}
      label={label}
      value={value}
      onChange={onChange}
      {...(error && { error: true, helperText: error })}
    />
  )
}

export default TextInput
