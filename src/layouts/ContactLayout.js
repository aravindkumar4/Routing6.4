import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const StyledLinkButton = styled(NavLink) ({
    textDecoration: 'none',
    color: '#fff',
    fontSize: 20,
    '&.active': {
        background: 'navy',
    },
    background: '#1876D1',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 5
})

const ContactLayout = () => {
    return (
        <>
            <Typography variant='h5'>Contact</Typography>
            <Typography variant='body1' color='gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat tempus mauris, eu ullamcorper diam varius sed. Nulla facilisi. Pellentesque facilisis facilisis nibh ut egestas. Nam suscipit aliquam mi, quis aliquam justo lacinia ut. Mauris elit felis, iaculis quis lorem eu, pretium placerat eros. Duis nec semper orci. Aenean quis augue vel turpis vestibulum aliquam. Nulla consequat eget risus nec viverra. Donec et nulla quis nibh molestie consectetur in sed lacus. Cras odio urna, consequat quis commodo vel, tincidunt vitae enim. Fusce lobortis libero eros, in sagittis dolor rhoncus id. Praesent in nulla in felis vulputate mattis. Morbi tellus ex, lacinia varius ipsum nec, placerat suscipit tortor. Nunc eu lobortis erat, ut placerat diam. Duis sem nisl, lobortis in tellus ac, faucibus posuere dui. Donec id cursus ligula, a vehicula massa.
            </Typography>
            <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, my: 5}}>
                <StyledLinkButton to='mail'>Mail us</StyledLinkButton>
                <StyledLinkButton to='phone'>Call Us</StyledLinkButton>
            </Box>
            <Outlet />
        </>
    )
}
export default ContactLayout