import { Box } from '@mui/material';
import React from 'react';
import EduAndExperience from './EduAndExperience/EduAndExperience';
import Skill from './Skills/Skill';

const SummaryOfResume = () => {
    return (
        <Box>
            <Box p='4rem' sx={{ backgroundColor: '#c5cae9', height: '25rem', m: '5rem', borderRadius: '2rem' }}>
              <EduAndExperience/>
            </Box>
            <Box>
                <Skill/>
            </Box>
            
        </Box>
    );
};

export default SummaryOfResume;