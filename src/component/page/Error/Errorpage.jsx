import React from 'react';
import Error_img from '../Error/Error_img.jpg';
import '../Error/error.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Errorpage = () => {

  return (
    <div className='img_styles' >
      <img src={Error_img} alt="noimg" />
      <Link to='/'>
        <Button variant='contained'>Go to Home</Button>
      </Link>
    </div>
  )
}

export default Errorpage;