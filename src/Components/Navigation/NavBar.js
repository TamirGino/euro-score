import React, {useState} from 'react';
import { AppBar,Box,Toolbar,IconButton,Container, Typography} from '@mui/material';
import styles from '../../Styles/NavBar.module.css'
import { Link, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {pages, hebrewTranslations} from '../../Constants/Constants'
import ResponsiveNav from './ResponsiveNav';
import { UserAuth } from '../../Context/AuthContex';

const NavBar = () => {
  const {user, logout} = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try{
        await logout();
        navigate('/');
        console.log("you are logged out !")
    } catch(e) {
        console.log(e.message);
    }
  }

  return (
    <AppBar elevation={0} position="sticky" sx={{background: '#09322B'}}>
      <Container maxWidth="xl">
        <Toolbar>
          
          <Box>
            <Link to="/home" >
                <IconButton>
                    <HomeIcon sx={{color:'white'}}/>
                </IconButton>
            </Link>
            <IconButton onClick={handleLogout}> 
              <LogoutRoundedIcon sx={{color:'white'}}/>
            </IconButton>
            <Typography>Hello, {user && user.email}</Typography>
          </Box>

          <Box sx={{ flexGrow: { xs: 0.5, sm: 1} }} />

          <Box sx={{ display: { xs: 'none', sm: 'flex', gap:'50px' },}}>
            {pages.map((page) => (
              <Link to={"/" + page.toLowerCase()}
                key={page}
                className={styles.nav_link}
                >
                    {hebrewTranslations[page]}
                </Link>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', sm: 'none', },zIndex:'50', }}>
            <ResponsiveNav/>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;