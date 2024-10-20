import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart } from '../Redux_toolkit/CartSlice';
import { Button } from '@mui/material';

const Cart = () => {
    const dispatch = useDispatch();
    const { cartItems, _cartHash } = useSelector((store) => store.cartSlice);

    const handleRemoveFromCart = (item) => {
        dispatch(RemoveFromCart(item));
    }

    const truncateStr = (str, length) => {
        return str.length > length ? str.substr(1, length) + "..." : str;
    }

    return (
        <div className="container mt-5 col-8">
            <h2>cart length:-({cartItems.length})</h2>

            {/* <div className="d-flex flex-wrap">
                    {cartItems?.map((item, index) => {
                        console.log("data");
                        return ( */}



            {/* <div div className="card p-2 mb-3" > */}
            {cartItems?.map((item, index) => {
                return (
                    <div className="card m-1 mb-3">
                        <div className="card-body">
                            <div className="row gap-5">
                                <div className="col-4">
                                    {/* <div className="d-flex flex-wrap"> */}
                                    <div>
                                        <img src={item.image} alt={item.title} height="280px" width="280px" />
                                    </div>
                                </div>
                                <div className="col-7 pt-4">
                                    <h5 className="card-title">{item?.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {item?.price}
                                    </h6>
                                    <p>
                                        {truncateStr(item?.description, 150)}
                                    </p>
                                    {/* </div> */}
                                    <button
                                        className="btn btn-danger text-white"
                                        onClick={() => handleRemoveFromCart(item?.id, index)}
                                    >
                                    Remove From Cart
                                        {/* {
              _cartHash[item.id] !== false && <Button variant='contained' className='btn btn-primary' style={{border:"none"}} onClick={() => handleRemoveFromCart(item)}>Remove From Cart</Button>
                                        } */}
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                );
            })}
            {/* </div> */}


            {/* ); */}
            {/* })} */}
            {/* </div> */}
        </div>
    )
}

export default Cart;


// {/* <Card>
// <CardActionArea>
//     <CardMedia
//         component="img"
//         height="200"
//         image={item.image}
//     />
//     <CardContent>
//         <Typography variant="body2" color="text.secondary">
//         {item.title}
//         </Typography>
//     </CardContent>
// </CardActionArea>
// </Card>  */}


