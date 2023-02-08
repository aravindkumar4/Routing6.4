import { styled, Typography } from '@mui/material';
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CareerList from '../components/CareerList';

const StyledLink = styled(Link)({
    textDecoration: "none"
})
const Careers = () => {
    const careerData = useLoaderData()
    console.log('hoooo', careerData)
    return (
        <>
            <Typography variant='h3'>Careers</Typography>
            {careerData && careerData.map((career) => {
                return <StyledLink to={career.id.toString()} key={career.id}>
                            <CareerList title={career.title} location={career.location} />
                       </StyledLink>  
            })}
        </>
        
    )
}
// career loader
export const careerLoader = async () => {
    const response = await fetch('http://localhost:8000/careers') 
    if(!response.ok){
        throw new Error('URL not found');
    }
    const jsonResponse = await response.json();
    console.log(jsonResponse)
    return jsonResponse
}
export default Careers