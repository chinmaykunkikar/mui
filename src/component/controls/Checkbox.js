import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from '@material-ui/core'
import React from 'react'

function Checkbox(props) {
  const { name, label, value, onChange } = props
  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox name={name} checked={value} onChange={onChange} />
        }
        label={label}
      />
    </FormControl>
  )
}

export default Checkbox
