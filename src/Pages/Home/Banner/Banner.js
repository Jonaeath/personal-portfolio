import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import img1 from '../../../Photo/Jonaeath.png';
import Image from 'mui-image';
import Grid from '@mui/material/Grid';
import './Banner.css';

const Banner = () => {

  return (
    <Box sx={{ flexGrow: 1, mt: '4rem'}}>
      <Grid container align = "center" justify = "center" alignItems = "center" columns={{ xs: 4, sm: 8, md: 12 }} sx={{ mt: '6rem' }}>
        <Grid xs={6}>
          <Typography sx={{ textAlign: 'center', fontSize: '2rem' }}>
            HI, I AM A FULL-STACK Developer
          </Typography>
          <Typography className='nameClass' sx={{ fontSize: '4rem', fontWeight: '700', textAlign: 'center' }}>
            JONAEATH HOSSIN
          </Typography>
          <Typography sx={{ textAlign: 'center', fontSize: '2rem' }}>
            Based in Dhaka,Bangladesh
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: '1rem' }}>
            <Button variant="contained" sx={{ fontWeight: '700', fontSize: '1.5rem', backgroundColor: 'black' }} >VIEW MY PROJECTS</Button>
          </Box>
        </Grid>
        <Grid xs={6}>
          <Box sx={{
            mt: '2rem',
            width: '22rem',
            height: '22rem',
          }} >
            <Image sx={{ border: 10, borderRadius: '50%' }} src={img1} alt='' />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Banner;