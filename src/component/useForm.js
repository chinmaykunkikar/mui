import { makeStyles } from '@material-ui/core'
import { useState, useEffect } from 'react'

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
    const { name, value } = event.target
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
