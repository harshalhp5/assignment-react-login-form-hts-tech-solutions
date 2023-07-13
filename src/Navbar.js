import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from './contexts/UserContext';

const Navbar = () => {
  const {userData, setUserdata} = useContext(UserContext);

  const handleLogout = (event) => {
    event.preventDefault();
    setUserdata(null);
  }

  return (
    <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position='static' color='secondary'>
                <Toolbar>
                    <Typography variant='h5' component={NavLink} sx={{textTransform:"none", textDecoration: "none", flexGrow: 1, color: "#fff"}} to="/">
                        Home
                    </Typography>
                    {!userData ? (
                      <Button variant='h6' component={NavLink} sx={{textTransform:"none"}} to="/login">
                          Login
                      </Button>
                    ) : (
                      <Button variant='h6' component={NavLink} sx={{textTransform:"none"}} to="/" onClick={handleLogout}>
                          Logout
                      </Button>
                    )}
              </Toolbar>
            </AppBar>  
        </Box>
      </>
  )
}

export default Navbar