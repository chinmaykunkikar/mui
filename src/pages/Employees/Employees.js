import React from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../component/PageHeader'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { Paper, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3)
  }
}))

function Employees(props) {
  const classes = useStyles()
  return (
    <>
      <PageHeader
        icon={<FavoriteBorderIcon fontSize='large' />}
        title='New Employee'
        subTitle='Form design with validation'
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  )
}

export default Employees
