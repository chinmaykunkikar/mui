import {
  createMuiTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core'
import React from 'react'
import Header from '../component/Header'

import SideMenu from '../component/SideMenu'
import './App.css'
import Employees from '../pages/Employees/Employees';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#62cbc1',
      main: '#3fc0b4',
    },
    secondary: {
      light: '#a047e6',
      main: '#8b1fe0',
    },
    background: {
      default: '#f7fcfc',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {

    transform: 'translateZ(0)'
      }
    }
  }
})

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
})

function App() {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
        <Employees />
      </div>
      <CssBaseline />
    </ThemeProvider>
  )
}

export default App
