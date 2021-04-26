import { Grid } from '@material-ui/core'
import React from 'react'
import Controls from '../../component/controls/Controls'
import { Form, useForm } from '../../component/useForm'
import { departmentItems, genderItems, initialValues } from '../utils/constants'

function EmployeeForm() {
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleChange,
    resetForm,
  } = useForm(initialValues)

  const validate = () => {
    let temp = {}
    temp.name = values.name ? '' : 'Name is required'
    temp.email = /$^|.+@.+..+/.test(values.email) ? '' : 'Not a valid email'
    temp.mobile = values.mobile.length > 9 ? '' : 'Not a valid mobile number'
    temp.departmentId =
      values.departmentId.length !== 0 ? '' : 'Select a department'
    setErrors({ ...temp })
    return Object.values(temp).every(validField => validField === '')
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (validate()) {
      window.alert('Success')
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Grid container>
        <Grid xs={6}>
          <Controls.TextInput
            name='name'
            label='Name'
            value={values.name}
            onChange={handleChange}
            error={errors.name}
          />
          <Controls.TextInput
            name='email'
            label='Email'
            value={values.email}
            onChange={handleChange}
            error={errors.email}
          />
          <Controls.TextInput
            name='mobile'
            label='Mobile Number'
            value={values.mobile}
            onChange={handleChange}
            error={errors.mobile}
          />
          <Controls.TextInput
            name='city'
            label='City'
            value={values.city}
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
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name='joinDate'
            label='Join Date'
            value={values.joinDate}
            onChange={handleChange}
          />
          <Controls.Checkbox
            name='isPermanent'
            label='Permanent Employee'
            value={values.isPermanent}
            onChange={handleChange}
          />
          <div>
            <Controls.Button text='Reset' color='default' onClick={resetForm} />
            <Controls.Button text='Submit' variant='contained' type='submit' />
          </div>
        </Grid>
      </Grid>
    </Form>
  )
}

export default EmployeeForm
