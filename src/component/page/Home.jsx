import { ShoppingBasket } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import '../css/home.css';
import Product from './Product';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromCart, addToCart } from '../Redux_toolkit/CartSlice';
import { Button } from '@mui/material';

const Home = () => {

    const { id } = useParams();
    const [data, setdata] = useState([]);
    const [datacopy, setdatacopy] = useState([]);
    const [filter_data, setfilter_data] = useState(data);
    const [filter_price, setfilter_price] = useState(0);
    const [loading, setloading] = useState(false);
    const [search, setSearch] = useState("");

    const dispatch = useDispatch();

    const { _cartHash } = useSelector((store) => store.cartSlice);
    console.log("carthash--" + _cartHash);


    const handleItemAddToCart = (item) => {
        dispatch(addToCart(item));
    };
    const handleItemRemoveCart = (item) => {
        dispatch(RemoveFromCart(item));
    };

    // let componentMounted = true;
    // ======================================|| get data from api||============================================
    useEffect(() => {
        const getProduct = async () => {
            try {
                setloading(true);
                const res = await fetch("https://fakestoreapi.com/products/");
                const actualdata = await res.json();
                setdata(actualdata);
                setfilter_data(actualdata);
                // setfilter_price(actualdata);
                console.log(actualdata);
                setloading(false);
            } catch (err) {
                console.log(err);
            }
        }
        getProduct();
    }, []);

    const filtertProduct = (cat) => {
        if (cat === 'all') {
            setfilter_data(data);
            // setfilter_data(data.length);
            return;
        }
        const updatedlist = data.filter((x) => x.category === cat);
        setfilter_data(updatedlist);
    }

    const concatstr = (str, length) => {
        return str.length > length ? str.substr(1, length) + "..." : str;
    }

    const SearchFunc = (e) => {
        setSearch((e.target.value).toLowerCase());
        const searchdata = data.filter((item) => item.title.toLowerCase().includes(search));
        setfilter_data(searchdata);
        // setdatacopy(searchdata);
        setdata(searchdata);

        return;
    }

    // const Loading = () => {
    //     return (
    //         <>
    //             <h3 style={{ backgroundColor: '#9cbb5d', height: '100vh', color: '#000', fontSize: "2.5rem" }}> Loading...</h3>
    //             {/* <div className="col-md-3">
    //                 <Skeleton height={350} />
    //             </div>
    //             <div className="col-md-3">
    //                 <Skeleton height={350} />
    //             </div>
    //             <div className="col-md-3">
    //                 <Skeleton height={350} />
    //             </div>
    //             <div className="col-md-3">
    //                 <Skeleton height={350} />
    //             </div> */}
    //         </>
    //     )
    // };
    const Showproduct = () => {
        return (
            <>
                <div className="buttons d-flex justify-content-center mb-2">
                    <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct('all')} >All</button>
                    <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("men's clothing")}>Men's clothing</button>
                    <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("women's clothing")}>women's clothing</button>
                    <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("jewelery")}>Jewellery</button>
                    <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("electronics")}>Electronics</button>

                    {/* ==================================|| price ||=============================== */}

                    {/* <button className="btn btn-primary me-2" onClick={() => filterPrice(100)}>under 100</button>
                    <button className="btn btn-primary me-2" onClick={() => filterPrice(200)}>under 200</button>
                    <button className="btn btn-primary me-2" onClick={() => filterPrice(500)}>under 500</button>
                    <button className="btn btn-primary me-2" onClick={() => filterPrice(1000)}>under 1000</button> */}
                </div>
                <h1>length:-{data.length}</h1>
                {/* <h1>length:-{datacopy.length}</h1> */}
                {filter_data === filter_data.title ? <h1>search result not match</h1> : filter_data.map((product, index) => {
                    return (
                        <>
                            <div className="col-md-3 mb-2 ">
                                <div className="card product_card h-100 text-center p-4 cursor" key={product.id}>
                                    <NavLink to={`/product-details/${product.id}`}>
                                        <img src={product.image} className='card-img-top' alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0"> {product.title.substring(0, 12)}... </h5>
                                            {/* <p className='card-text'>{ product.description}</p> */}
                                            <p className='card-text'>{concatstr(product.description, 48)}</p>
                                            <p className="card-price">
                                                {/* <span style={{ fontSize: "10px" }}> $ </span><span style={{ fontSize: "18px" }}> {parseInt(product.price)} </span> */}
                                                ${parseInt(product.price)}
                                            </p>

                                            {
                                                _cartHash[product.id] !== true ? (

                                                    <Button variant='outlined'
                                                        className='btn btn-primary'
                                                        onClick={() => handleItemAddToCart(product)}
                                                    >
                                                        Add To Cart
                                                    </Button>
                                                ) : (
                                                    <Button
                                                        variant='outlined'
                                                        className='btn btn-success'
                                                        onClick={() => handleItemRemoveCart(product?.id)}
                                                    >
                                                        Remove cart
                                                    </Button>
                                                )
                                            }
                                            <NavLink to={`/product-details/${product.id}`} className="btn btn-primary"  >Buy Now</NavLink>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                        </>
                    )
                })}

            </>
        )
    }



    return (
        <>
            <div className='banner'>
                {/* ====================================|| upper_section ||==================================== */}
                <div className="container pt-5 pb-2 mt-4">
                    <div className="card  pb-4">
                        <div className="card-body">
                            <h5 className="card-title display-3">
                                New Season Arrivals ✌
                            </h5>
                            <h4 className='card-text display-4 textChris'>christmas december😍</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="card">
                        <form action="">
                            <input
                                type="text"
                                placeholder='search product'
                                class="form-control"
                                // onChange={(e) => setSearch(e.target.value).toLowerCase()}
                                onChange={SearchFunc}
                            />
                        </form>
                    </div>
                </div>
                {/* ====================================|| body_section ||==================================== */}
                {/* <div className="container d-flex flex-wrap mt-3">
                    <Product/>
                </div> */}

                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>latest products</h1>
                        <hr />
                    </div> */}
                            <div className="row justify-content-center">
                                {/* {loading ? <Loading /> : <Showproduct />} */}
                                {loading ? (<h2>load...</h2>) : (<Showproduct />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;