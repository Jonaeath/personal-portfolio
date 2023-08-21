import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const AboutMe = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container p='5rem' columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={8}>
                        <Typography sx={{textAlign:'center'}} variant="h6" component="h2">About Me</Typography>
                        <Typography sx={{textAlign:'center',fontWeight:'bold'}} variant="h3" component="h2">Known Me More</Typography>
                        <br/>
                        <Typography variant="h6" component="h2">
                            <span style={{ fontWeight: 'bold' }}>Hi,I'm Jonaeath Hossin</span><br />
                            I am an Engineer and also I'm a full-stack web developer with a passion for web design. I enjoy developing simple, clean, and slick websites that provide real value to the end user.From July 2022 till the present, I am working as Dream IT Ltd web developer.
                        </Typography>
                    </Grid>
                    <Grid xs={4} sx={{textAlign:'center',pt:'2rem'}}>
                        <Typography variant="h1" component="h2">2</Typography>
                        <Typography variant="h3" component="h2">Years of Experiance</Typography>
                    </Grid>
                </Grid>
                <Grid container align="center" justify="center" alignItems="center"  pt='3rem' spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={3}><Typography variant="h5" component="h2">Name:<br/><span style={{ fontWeight: 'bold' }}>Jonaeath Hossin</span></Typography></Grid>
                    <Grid xs={3}><Typography variant="h5" component="h2">Email:<br/><span style={{ fontWeight: 'bold' }}>jonaeathbcc18@gmail.com</span></Typography></Grid>
                    <Grid xs={3}><Typography variant="h5" component="h2">Phone:<br/><span style={{ fontWeight: 'bold' }}>+8801625493309</span></Typography></Grid>
                    <Grid xs={3}><Typography variant="h5" component="h2">From:<br/><span style={{ fontWeight: 'bold' }}>Dhaka,Bangladesh</span></Typography></Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AboutMe;