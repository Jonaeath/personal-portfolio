import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './Skill.css'

const Skill = () => {
    return (
        <Box>
            <Grid container pr='5rem' pb='5rem' pl='5rem' columns={{ xs: 4, sm: 8, md: 12 }}>
            <Typography sx={{fontWeight:'bold',pb:'2rem',fontSize:'2rem'}} >MY SKILLS</Typography>
                <Grid container  columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid xs={6} pr='2rem' >
                        <Box className='skill'>
                            <Box className='details'>
                                <Typography fontWeight='bold'>Web Design</Typography>
                                <Typography>80%</Typography>
                            </Box>
                            <Box className='bar'>
                                <Box id="web-bar" />
                            </Box>
                        </Box>
                        <Box className='skill'>
                            <Box className='details'>
                                <Typography fontWeight='bold'>JavaScript</Typography>
                                <Typography>70%</Typography>
                            </Box>
                            <Box className='bar'>
                                <Box id="java-bar" />
                            </Box>
                        </Box>
                        <Box className='skill'>
                            <Box className='details'>
                                <Typography fontWeight='bold'>React Js</Typography>
                                <Typography>85%</Typography>
                            </Box>
                            <Box className='bar'>
                                <Box id="react-bar" />
                            </Box>
                        </Box>
                        <Box className='skill'>
                            <Box className='details'>
                                <Typography fontWeight='bold'>Node Js</Typography>
                                <Typography>50%</Typography>
                            </Box>
                            <Box className='bar'>
                                <Box id="node-bar" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid xs={6} pl="2rem">
                        <Box className='skill'>
                            <Box className='details'>
                                <Typography fontWeight='bold'>HTML/CSS</Typography>
                                <Typography>90%</Typography>
                            </Box>
                            <Box className='bar'>
                                <Box id="hc-bar" />
                            </Box>
                        </Box>
                        <Box className='skill'>
                            <Box className='details'>
                                <Typography fontWeight='bold'>Material ui(MUI)</Typography>
                                <Typography>75%</Typography>
                            </Box>
                            <Box className='bar'>
                                <Box id="mui-bar" />
                            </Box>
                        </Box>
                        <Box className='skill'>
                            <Box className='details'>
                                <Typography fontWeight='bold'>Tailwind CSS</Typography>
                                <Typography>85%</Typography>
                            </Box>
                            <Box className='bar'>
                                <Box id="tw-bar" />
                            </Box>
                        </Box>
                        <Box className='skill'>
                            <Box className='details'>
                                <Typography fontWeight='bold'>Boostrap CSS</Typography>
                                <Typography>85%</Typography>
                            </Box>
                            <Box className='bar'>
                                <Box id="bt-bar" />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Skill;