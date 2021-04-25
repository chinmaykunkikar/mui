import { Grid } from '@material-ui/core'
import React from 'react'
import Controls from '../../component/controls/Controls'
import { useForm, Form } from '../../component/useForm'

const initialValues = {
  id: 0,
  name: '',
  email: '',
  mobile: '',
  gender: 'male',
  departmentId: '',
  joinDate: new Date(),
  isPermanent: false,
}

const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'nonbinary', title: 'Non-binary' },
]

const departmentItems = [
  { id: '1', title: 'Development' },
  { id: '2', title: 'Marketing' },
  { id: '3', title: 'HR' },
  { id: '4', title: 'Accounting' },
]

function EmployeeForm() {
  const { values, setValues, handleChange } = useForm(initialValues)

  return (
    <Form>
      <Grid container>
        <Grid xs={6}>
          <Controls.TextInput
            name='name'
            label='Name'
            value={values.name}
            onChange={handleChange}
          />
          <Controls.TextInput
            name='email'
            label='Email'
            value={values.email}
            onChange={handleChange}
          />
          <Controls.TextInput
            name='mobile'
            label='Mobile Number'
            value={values.mobile}
            onChange={handleChange}
          />
        </Grid>
        <Grid xs={6}>
          <Controls.RadioGroup
            name='gender'
            label='Gender'
            value={values.gender}
            onChange={handleChange}
            items={genderItems}
          />
          <Controls.Select
            name='departmentId'
            label='Department'
            value={values.departmentId}
            onChange={handleChange}
            options={departmentItems}
          />
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm
