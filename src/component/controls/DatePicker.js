
import DateFnsUtils from '@date-io/date-fns'
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import React from 'react'

function DatePicker(props) {
  const toDefaultParams = (name, value) => ({
    target: {
      name,
      value,
    },
  })

  const { name, label, value, onChange } = props
  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker 
            label={label}
            format='dd/MM/yyyy'
            name={name}
            value={value}
            onChange={date => onChange(toDefaultParams(name, date))}
          />
      </MuiPickersUtilsProvider>
  )
}

export default DatePicker
