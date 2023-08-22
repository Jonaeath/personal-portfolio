import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './SummaryOfResume.css';
import Skill from './Skills/Skill';



const SummaryOfResume = () => {
    return (
        <section>
            <Box>
                <Grid p='4rem' sx={{backgroundColor:'#c5cae9',height:'35rem',m:'5rem',borderRadius:'2rem'}}>
                    <Grid>
                        <Typography sx={{ textAlign: 'center',fontWeight:'bold'}} variant="h6" component="h2">Resume</Typography>
                        <Typography sx={{ textAlign: 'center',fontWeight:'bold'}} variant="h3" component="h2">A summary of My Resume</Typography>
                    </Grid>
                    <Grid container pt='1.50rem' spacing={2}>
                        <Grid xs={6}>
                            <Typography sx={{fontWeight:'bold'}} variant="h4" component="h2">My Education</Typography>
                            <Typography className='verticalLine'>
                                 <Typography pt='.75rem' pl='.5rem'><span style={{ fontWeight: 'bold' }}>B.Sc In Electrical & Electronic Engineering</span><br/>
                                 United International University /2012-2016<br/>
                                 Dhaka,Bangladesh 
                                 </Typography>
                                <Typography className='horizontalLine'/>
                                <Typography pt='.25rem' pl='.5rem'><span style={{ fontWeight: 'bold' }}>Diploma In Electrical Engineering</span><br/>
                                 Comilla Polytechnic Institute /2005-2009<br/>
                                 Electrical Technology
                                 </Typography>
                                <Typography className='horizontalLine'/>
                                <Typography pt='.25rem' pl='.5rem'><span style={{ fontWeight: 'bold' }}>Secondary School Certificate</span><br/>
                                 Bhuiyam High School /2000-2005<br/>
                                 Science Department
                                 </Typography>
                                <Typography className='horizontalLine'/>
                            </Typography>
                        </Grid>
                        <Grid xs={6}>
                            <Typography sx={{fontWeight:'bold'}} variant="h4" component="h2">My Experience</Typography>
                            <Typography className='verticalLine'>
                                 <Typography pt='.75rem' pl='.5rem'><span style={{ fontWeight: 'bold' }}>Full-stack Web Developer</span><br/>
                                 Dream It Ltd,Bangladesh<br/>
                                 July 2022 till Present(Remote) 
                                 </Typography>
                                <Typography className='horizontalLine'/>
                                <Typography pt='.25rem' pl='.5rem'><span style={{ fontWeight: 'bold' }}>Assistant Network Engineer </span><br/>
                                Bangladesh Computer Council<br/>
                                January 2018 till - June 2023
                                 </Typography>
                                <Typography className='horizontalLine'/>
                                <Typography pt='.25rem' pl='.5rem'><span style={{ fontWeight: 'bold' }}>VLSI CAD Engineer(Software)</span><br/>
                                sBIT Inc. Ltd.<br/>
                                November 2016 till – December 2017
                                 </Typography>
                                <Typography className='horizontalLine'/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Skill/>
            </Box>
        </section>
    );
};

export default SummaryOfResume;