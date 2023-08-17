import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Box } from '@mui/material';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <section>
           <Box sx={{backgroundColor:'#cddc39',
            height:'100%',
            pb:'5rem'

        }}>
           <Navbar></Navbar>
           <Banner></Banner>
           </Box>
    
        </section>
    );
};

export default Home;