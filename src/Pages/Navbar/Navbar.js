import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';


export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (

        <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ textAlign: 'center' }} >
                    <Grid xs={6} display='flex' alignItems="center" justifyContent='center'>
                        <PersonIcon sx={{ pr: '.25rem' }} />
                        <Typography variant="h6" component="div" sx={{ fontWeight: '700' }}>
                            JONAEATH HOSSIN
                        </Typography>

                    </Grid>
                    <Grid xs={6} display='flex' alignItems="center" justifyContent='center'>
                        <EmailIcon sx={{ pr: '.25rem' }} />
                        <Typography variant="h6" component="div" sx={{ pr: '1.25rem', fontWeight: '700' }}>
                            jonaeathbcc18@gmail.com
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <Box>
                       
                               <Link to='/'>Home</Link>
                                <br />
                                <Link to='/aboutme'>About Me</Link>
                        
                            </Box>
                        </Menu>
                    </Grid>
                </Grid>
        </Box>

    );
}