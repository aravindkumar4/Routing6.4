import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetail = () => {
    const {id} = useParams();
    console.log(id);
    const jobData = useLoaderData();
    console.log(jobData)
    return (
        <>
            <Divider sx={{mx:20, my:5}} />
            <Box sx={{p:2}}>
                <Typography variant='h4'>{jobData.title}</Typography>
                <Typography variant='h6' color='blue'>{jobData.salary}</Typography>
                <Typography variant='body1' color='gray'>{jobData.location}</Typography>
            </Box>
        </>
    )
}
export const jobDetailLoader = async ({params}) => {
    const {id} = params;
    const response = await fetch('http://localhost:8000/careers/' + id)

    if(!response.ok){
        throw new Error('job post not found')
    }
    const jsonResponse = await response.json();
    return jsonResponse
}

export default CareerDetail