import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
  makeStyles,
} from '@material-ui/core'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import SearchIcon from '@material-ui/icons/Search'

import React from 'react'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
  },
  searchInput: {
    opacity: '0.6',
    padding: `0px ${theme.spacing(1)}px`,
    fontSize: theme.typography.htmlFontSize,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
    '& .MuiSvgIcon-root': {
      marginRight: `${theme.spacing(1)}px`,
    },
  },
}))

function Header(props) {
  const classes = useStyles()
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar>
        <Grid container alignItems='center'>
          <Grid>
            <InputBase
              className={classes.searchInput}
              placeholder='Search'
              startAdornment={<SearchIcon fontSize='small' />}
            />
          </Grid>
          <Grid item sm></Grid>
          <Grid>
            <IconButton>
              <Badge color='secondary'>
                <NotificationsNoneIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge color='secondary'>
                <ChatBubbleOutlineIcon fontSize='small' />
              </Badge>
            </IconButton>
            <IconButton>
              <ExitToAppIcon fontSize='small' />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Header
