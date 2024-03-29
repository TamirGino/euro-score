import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Flag from 'react-flagkit';

export default function AccountMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const getFirstLetter = (name) => {
    return name ? name[0].toUpperCase() : '';
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="My profile">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 0}}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 32, height: 32, background: '#59DF72' }}>
                {props.user ? getFirstLetter(props.user.displayName) : '⚽'}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'none',
              position: 'absolute',
              top: 0,
              right: 160,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem sx={{pointerEvents: 'none'}} >
         <Typography fontWeight='bold'>Hello, {props.user ? props.user.displayName : 'guest'}</Typography> 
        </MenuItem>
        <Divider />
        {/* <MenuItem sx={{pointerEvents: 'none'}} >
          <Typography fontStyle='italic'>You have 3 groups</Typography> 
        </MenuItem> */}
        <MenuItem sx={{pointerEvents: 'none'}} >
        <Avatar />
          Top scorer
        </MenuItem>
        <MenuItem  sx={{pointerEvents: 'none'}}>
          <ListItemIcon>
            <Flag country="FR" />
          </ListItemIcon>
          Winning team
        </MenuItem>
        <MenuItem sx={{pointerEvents: 'none'}}>
          <ListItemIcon>
              🥇
          </ListItemIcon>
          In group B
        </MenuItem>
        <MenuItem sx={{pointerEvents: 'none'}}>
          <ListItemIcon>
              🥉
          </ListItemIcon>
          In group A
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={props.logout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
