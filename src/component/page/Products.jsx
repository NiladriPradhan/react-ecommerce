





import React, { useEffect, useState } from 'react';
import '../css/product.css';
import Showproduct from './Showproduct';
import { Link, NavLink, useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import './products.css';

const Products = () => {
    const { id } = useParams();
    const [data, setdata] = useState([]);
    const [filter_data, setfilter_data] = useState(data);
    const [filter_price, setfilter_price] = useState(0);
    const [loading, setloading] = useState(false);
    // let componentMounted = true;
    // ======================================|| get data from api||============================================
    useEffect(() => {
        const getProduct = async () => {
            try {
                setloading(true);
                const res = await fetch("https://fakestoreapi.com/products");
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
    }, [])

    const Loading = () => {
        return (
            <>
                <h3
                    style={{
                        backgroundColor: '#9cbb5d',
                        height: '100vh',
                        color: '#000',
                        fontSize: "2.5rem", marginTop: "5rem"
                    }}
                    className='mt-5'
                > Loading...</h3>
                {/* <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div> */}
            </>
        )
    };
    const filtertProduct = (cat) => {
        if (cat === 'all') {
            setfilter_data(data);
            return;
        }
        const updatedlist = data.filter((x) => x.category === cat);
        setfilter_data(updatedlist);
    }
    const cocatstr = (str, length) => {
        return str.length > length ? str.substr(1, length) + "..." : str;
    }

    const Showproduct = () => {
        return (
            <>
                {/* <div> */}
                {/* <h1>length:-{data.length}</h1> */}
                <div className="mt-5">
                    <p className='fs-1 text-center text-dark'>Latest Product</p>
                    <hr className='text-black' />
                    <div className="buttons d-flex justify-content-center mb-2">
                        <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct('all')} >All</button>
                        <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("men's clothing")}>Men's clothing</button>
                        <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("women's clothing")}>women's clothing</button>
                        <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("jewelery")}>Jewellery</button>
                        <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("electronics")}>Electronics</button>
                    </div>
                    <h1>length:-{data.length}</h1>
                </div>
                {filter_data.map((product) => {
                    return (
                        <>
                            <div className="col-md-3 mb-2 cursor">
                                <Link to={`/product-details/${product.id}`} className="">

                                    <div className="card product_card h-100 text-center p-4 " key={product.id}>
                                        <img src={product.image} className='card-img-top' alt={product.title} height="250px" />
                                        <div className="card-body">
                                            <h5 className="card-title mb-0"> {product.title.substring(0, 12)}... </h5>
                                            {/* <p className='card-text'>{ product.description}</p> */}
                                            <a className='card-text '>{cocatstr(product.description, 48)}</a>
                                            <p className="card-price">
                                                {/* <span style={{ fontSize: "10px" }}> $ </span><span style={{ fontSize: "18px" }}> {parseInt(product.price)} </span> */}
                                                ${parseInt(product.price)}
                                            </p>

                                            {/* <button className='btn btn-primary'>Add To Cart</button> */}
                                            {/* <NavLink to={`/product/${product.id}`} className="btn btn-primary"  >Buy Now</NavLink> */}
                                        </div>
                                        {/* <button>goto</button> */}
                                    </div>
                                </Link>

                            </div >
                        </>
                    )
                })
                }
                {/* </div> */}
            </>
        )
    }
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        {/* <div className="col-12 mb-5">
                        <h1 className='display-6 fw-bolder text-center'>latest products</h1>
                        <hr />
                    </div> */}
                        <div className="row justify-content-center">
                            {loading ? <Loading /> : <Showproduct />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products;