import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  },
}))

function Button(props) {
  const { text, size, variant, color, onClick, ...rest } = props
  const classes = useStyles()
  return (
    <MuiButton
      className={classes.root}
      variant={variant}
      color={color || 'primary'}
      size={size || 'large'}
      onClick={onClick}
      {...rest}>
      {text}
    </MuiButton>
  )
}

export default Button
