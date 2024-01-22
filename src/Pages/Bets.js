import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import { Box, ListItemButton } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const emails = ['username@gmail.com1', 'user02@gmail.com2','username@gmail.com3', 'user02@gmail.com4','username@gmail.com5',
 'user02@gmail.com6','username@gmail.com7', 'user02@gmail.com8','username@gmail.com9', 
 'user02@gmail.com10','username@gmail.com11', 'user02@gmail.comm12','username@gmail.comsm13', 'Last14'];

const Bets = () => {
  const isSmallScreen = useMediaQuery('(max-width:450px)');

  const handleListItemClick = (value) => {
    console.log("TRUE")
  };


  return (
    <>
    <Box display='flex' justifyContent='center' alignItems='center'
         sx={{padding:isSmallScreen ? 0 : 5, overflow: 'hidden' }}>
    <List sx={{ width: '100%', maxWidth: 600, 
        height: isSmallScreen ? '100vh' : '75vh', overflowY: "scroll", borderRadius:'15px',
        background: 'white', opacity:0.8,
        //  backdropFilter: 'blur(5px)',
    '&::-webkit-scrollbar': {
      width: 0, // Set the width of the scrollbar to 0
    }, }} >
    {emails.map((email) => (
          <ListItem disableGutters key={email}>
            <ListItemButton onClick={() => handleListItemClick(email)}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: '#59DF72', color: 'black' }}>
                  <PersonIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText sx={{ color: 'black' }} primary={email} />
            </ListItemButton>
          </ListItem>
        ))}
    </List>
    </Box>
     
    </>
  );
}

export default Bets;
