"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {
  StyledAppBar,
  StyledHeaderButton,
  StyledLogoImage,
  StyledMenueItem,
  StyledMenuIcon,
  StyledRegisterButton,
  StyledToolbar,
} from './styles/Styles';


export function AppBar() {
 

  const menueItems = [
    <StyledHeaderButton key={1}>log in </StyledHeaderButton>,
    <StyledRegisterButton  key={2}>
      sign up
    </StyledRegisterButton>
  
    ,
  ];

 

  return (
    <StyledAppBar position="static">
      <Container maxWidth="xl">
        <StyledToolbar disableGutters>
          <StyledLogoImage src={'webAssets.logo'} alt="" />

          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <StyledMenuIcon />
            </IconButton>
            {/* <StyledMenueItem
              id="menu-appbar"
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {menueItems.map((page,index) => (
                <MenuItem  key ={index}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </StyledMenueItem> */}
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
            {menueItems.map((page,index) => (
              <Button
              key={index}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </StyledToolbar>
      </Container>
    </StyledAppBar>
  );
}

export default AppBar;
