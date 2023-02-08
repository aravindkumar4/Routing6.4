import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';

const CareersLayout = () => {
    return (
        <>
            <Typography variant='body1'>lorem*1 Nullam sapien tortor, egestas ac nisl a, maximus tempor odio. Fusce id urna massa. Etiam nec sapien tempus, rhoncus arcu iaculis, varius elit. Aenean pulvinar risus finibus malesuada rhoncus. Pellentesque ornare venenatis velit vitae viverra. Cras dui justo, lobortis eget euism</Typography>
            <Container sx={{p:5}}>
                <Outlet />
            </Container>
        </>
    )
}

export default CareersLayout;