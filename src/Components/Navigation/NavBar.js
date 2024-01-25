import React, {useState} from 'react';
import { AppBar,Box,Toolbar,IconButton,Container, Typography, Avatar, Menu} from '@mui/material';
import styles from '../../Styles/NavBar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {pages, hebrewTranslations} from '../../Constants/Constants'
import ResponsiveNav from './ResponsiveNav';
import { UserAuth } from '../../Context/AuthContex';
import ProfileMenu from '../Navigation/ProfileMenu'

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
            <ProfileMenu logout={handleLogout} user={user}/>
          </Box>

          <Box sx={{ flexGrow: { xs: 0.5, sm: 1} }} />

          <Box sx={{ display: { xs: 'none', sm: 'flex', gap:'50px' },}}>
            {pages.map((page) => (
              <NavLink to={"/" + page.toLowerCase()}
                key={page}
                // className={styles.nav_link}
                className={({ isActive }) =>
                  isActive ? `${styles.nav_link} ${styles.activeNav}` : styles.nav_link
                }
                >
                    {hebrewTranslations[page]}
                </NavLink>
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