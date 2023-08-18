import React from 'react';
import SouthIcon from '@mui/icons-material/South';
import './BelowwArrow.css';

const BelowArrrow = () => {
    return (
            <div className='flex-container'>
                <div className='main'>
                <div className="arrow-container animated fadeInDown">
                    <div className="arrow-2">
                        <SouthIcon sx={{ mt: '1rem' }} />
                    </div>
                    <div className="arrow-1 animated hinge infinite zoomIn"></div>
                </div>
            </div>
            </div>
        

    );
};

export default BelowArrrow;