import React from 'react';
import '../css/navbar.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const itemlength = useSelector((store) => store.cartSlice.cartItems.length);

  const Linkcomponent = ({ name, to }) => {  
    return (
      <>
        <li className='nav_list'>
          <a href="">
            <Link to={to}>{name}</Link>
          </a>
        </li>
      </>
    )
  }
  return (
    <div>
      <nav>
        <div className="nav_left text-success"> <h2> <i> <u> Ecom.com </u> </i> </h2></div>
        <div className="nav_center">
          <ul>
            <Linkcomponent to="/" name="Home" />
            <Linkcomponent to="/products" name="Products" />
            <Linkcomponent to="/about" name="About" />
            <Linkcomponent to="/contact" name="Contact" />
          </ul>
        </div>
        <div className="nav_right">
          <Link to='/login'>
            <Button className='btn_style' variant='outlined'>
              login
            </Button>
          </Link>
          <Link to='*'>
            <Button variant='outlined'>
              Register

            </Button>
          </Link>
          <Link to='/cart'>
            <Button variant='outlined'>
              <ShoppingCart fontSize='' />
              Cart({ itemlength })
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;