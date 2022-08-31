import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icon-left-font-monochrome-white.svg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Typography } from '@mui/material';

function BannerLoggedIn() {
    
    const handleLogOut = (event) => {
        event.preventDefault();
        localStorage.clear();
        window.location.reload();
    }

    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    item
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <Link to='/'>
                        <img src={logo} alt='Groupomania' className='logo' />
                    </Link>
                </IconButton>
                <Box sx={{ flexGrow: 1 }}/>
                <Typography variant="button">
                    <Button color="inherit" onClick={handleLogOut}>LOG OUT</Button>
                    <Button component={Link} to='/newPost' color="inherit">NEW POST</Button>
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default BannerLoggedIn