import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ActionAreaCard({lat,long}) {
  return (

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
           <div className='justify-center items-center flex flex-col'>
            <p className='text-[20px]'>latitude is {lat}</p>
            <p className='text-[20px]'>Longitude is {long}</p>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}