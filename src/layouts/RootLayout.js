import { Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBreadCrumbs from '../components/AppBreadCrumbs';
import Navbar from '../components/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar />
            <Container sx={{p:3}}>
                <AppBreadCrumbs />
            </Container>
            <Container sx={{p:5}}>
                <Outlet />
            </Container>
        </div>
    )
}
export default RootLayout;