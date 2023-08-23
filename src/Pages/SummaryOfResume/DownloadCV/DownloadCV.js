import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import pdfFile from '../../../Photo/jonaeath_cv.pdf';

const DownloadCV = () => {

    // const onDownload = () => {
    //     const link = document.createElement('a');
    //     link.download = `jonaeath`;
    //     link.href = {pdffile};
    //     link.click();
    //   };

    return (
     <Box container align="center" justify="center" alignItems="center" pb='5rem'>
      <Grid>
      <a
        href={pdfFile}
        download="JONAEATH-HOSSIN-CV"
        target="_blank"
        rel="noreferrer"
      >
        <Button variant="contained">Download Resume</Button>
      </a>
      </Grid>
     </Box>
    );
};

export default DownloadCV;