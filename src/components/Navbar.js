import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink) ({
    textDecoration: 'none',
    color: '#fff',
    fontSize: 20,
    '&.active': {
        background: 'navy',
        padding: 10,
        borderRadius: 5
    }
})

const Navbar = () => {
    return (
        <>
            <AppBar position='static'>
                <Container>
                    <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography variant='h5'>
                            Router 6.4 and aboue
                        </Typography>
                        <Box sx={{display: 'flex', alignItems: 'center', gap: '50px'}}>
                            <StyledNavLink to='/'>Home</StyledNavLink>
                            <StyledNavLink to='about'>About</StyledNavLink>
                            <StyledNavLink to='contact'>Contact</StyledNavLink>
                            <StyledNavLink to='careers'>Careers</StyledNavLink>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}

export default Navbar