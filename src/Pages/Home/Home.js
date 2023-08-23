import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Box } from '@mui/material';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <section>
           <Box style={{backgroundColor:'#cddc39',
            height:'100%',
            pb:'5rem',
            position:'relative'

        }}>
           <Navbar style={{position: 'absolute', top:0}}></Navbar>
           <Banner></Banner>
           </Box>   
        </section>
    );
};

export default Home;