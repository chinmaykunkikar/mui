import { makeStyles } from '@material-ui/core'
import { useState } from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}))

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues)
  const handleChange = event => {
    
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({
      ...values,
      [name]: value,
    })
  }
  return { values, setValues, handleChange }
}

export function Form(props) {
  const classes = useStyles()
  return <form className={classes.root}>{props.children}</form>
}
