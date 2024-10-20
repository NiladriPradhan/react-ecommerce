import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { RemoveFromCart, addToCart } from '../Redux_toolkit/CartSlice';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setproduct] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(() => {
        const getProduct = async () => {
            try {
                setloading(true);
                const res = await fetch(`https://fakestoreapi.com/products/${id}`);
                setproduct(await res.json());
                setloading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getProduct();
    }, []);

    //==========================||  FOR CART ||=======================
    const { _cartHash } = useSelector((store) => store.cartSlice);
    console.log("carthash--" + _cartHash);

    const dispatch = useDispatch();

    const handleItemAddToCart = (item) => {
        dispatch(addToCart(item));
    };
    const handleItemRemoveCart = (item) => {
        dispatch(RemoveFromCart(item));
    };


    const Loading = () => {
        return (
            <>
                {/* <p className='fs-1 text-dark'>Loading...</p> */}
                <div className="col-md-6 bg-black">
                    <Skeleton height={400} className='bg-black' />
                </div>
                <div className="col-md-6">
                    <Skeleton height={50} width={300} />
                    <Skeleton height={75} />
                    <Skeleton height={25} width={150} />
                    <Skeleton height={75} />
                    <Skeleton height={75} />
                    <Skeleton height={75} />
                </div>
            </>
        )
    };
    const Showproduct = () => {
        return (
            <>
                    <div className="col-md-6">
                        <img src={product.image} alt={product.title} height="400px" width="400px" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-uppercase text-black-50">{product.category}</h4>
                        <h1 className='display-5'>{product.title}</h1>
                        <p className="lead fw-bolder">
                            Rating {product.rating && product.rating.rate}
                            <i className='fa fa-star'></i>
                        </p>
                        <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
                        <p className="lead">{product.description}</p>
                        <NavLink to="/cart" className="btn btn-primary m-1" onClick={() => handleItemAddToCart(product)} >Add to Cart</NavLink>
                        {/* <NavLink to="/cart" className="btn btn-success"  >Go to Cart</NavLink> */}
                    </div>
            </>
        )
    }
    return (
        <div>
            <h1>inside Product</h1>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <Showproduct />}
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;