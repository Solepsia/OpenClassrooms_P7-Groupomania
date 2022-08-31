import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/icon-left-font-monochrome-white.svg'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

function BannerNotLoggedIn() {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
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
                <Button component={Link} to='/login' color="inherit">LOG IN</Button>
                <Button component={Link} to='/signup' color="inherit">SIGN UP</Button>
            </Toolbar>
        </AppBar>
    </Box>
    )
}

export default BannerNotLoggedIn