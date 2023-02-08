import { Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const About = () => {
    const [user, setUser] = useState('Test');
    if(!user){
       return <Navigate to='/' replace={true} />
    }
    return (
        <>
            <Typography variant='h5'>About</Typography>
            <Typography variant='body1' color='gray'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat tempus mauris, eu ullamcorper diam varius sed. Nulla facilisi. Pellentesque facilisis facilisis nibh ut egestas. Nam suscipit aliquam mi, quis aliquam justo lacinia ut. Mauris elit felis, iaculis quis lorem eu, pretium placerat eros. Duis nec semper orci. Aenean quis augue vel turpis vestibulum aliquam. Nulla consequat eget risus nec viverra. Donec et nulla quis nibh molestie consectetur in sed lacus. Cras odio urna, consequat quis commodo vel, tincidunt vitae enim. Fusce lobortis libero eros, in sagittis dolor rhoncus id. Praesent in nulla in felis vulputate mattis. Morbi tellus ex, lacinia varius ipsum nec, placerat suscipit tortor. Nunc eu lobortis erat, ut placerat diam. Duis sem nisl, lobortis in tellus ac, faucibus posuere dui. Donec id cursus ligula, a vehicula massa.
            </Typography>
            <Button variant='contained' onClick={() => setUser(null)}>Logout</Button>
        </>
    )
}

export default About;