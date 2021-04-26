export const initialValues = {
  id: 0,
  name: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',
  departmentId: '',
  joinDate: new Date(),
  isPermanent: false,
}

export const departmentItems = [
    { id: '1', title: 'Engineering' },
    { id: '2', title: 'R&D' },
    { id: '3', title: 'Operations' },
    { id: '4', title: 'Marketing' },
    { id: '5', title: 'HR' },
    { id: '6', title: 'Accounting' },
  ]
  
export const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'nonbinary', title: 'Non-binary' },
]
