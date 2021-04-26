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
  const [errors, setErrors] = useState({})
  const handleChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    setValues({
      ...values,
      [name]: value,
    })
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
  }

  return { values, setValues, errors, setErrors, handleChange, resetForm }
}

export function Form(props) {
  const classes = useStyles()
  const { children, ...rest } = props
  return (
    <form className={classes.root} {...rest}>
      {children}
    </form>
  )
}
