import { Box, Typography } from '@mui/material';
import React from 'react';

const MHome = () => {
    return (
        <div>
            <Box textTransform="center"  sx={{ bgcolor: 'secondary.main' }} className="text-center text-white py-2">
                <Typography variant='h3'>This is React Croud Operation...</Typography>
            </Box>

            {/* Data from and viever section  */}
            <div className="container">
                {/* Data form */}
                <div className="col">
                    <h4>Input Student Data</h4>
                </div>
                {/* Data viewer */}
                <div className="col">
                    <h4>Input Student Data</h4>
                </div>
            </div>
        </div>
    );
};

export default MHome;