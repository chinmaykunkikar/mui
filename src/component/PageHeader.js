import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'fdfdfd',
  },
  pageHeader: {
    display: 'flex',
    padding: theme.spacing(4),
    marginBottom: theme.spacing(2),
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(2),
    color: theme.palette.primary.main,
  },
  pageTitle: {
    paddingLeft: theme.spacing(3),
    '& .MuiTypography-subtitle2': { opacity: '0.6' },
  },
}))

function PageHeader(props) {
  const { icon, title, subTitle } = props
  const classes = useStyles()
  return (
    <Paper square elevation={0} className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant='h6' component='div'>
            {title}
          </Typography>
          <Typography variant='subtitle2' component='div'>
            {subTitle}
          </Typography>
        </div>
      </div>
    </Paper>
  )
}

export default PageHeader
