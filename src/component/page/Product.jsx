// import React, { useEffect, useState } from 'react';
// import '../css/product.css';
// import Showproduct from './Showproduct';
// import { NavLink, useParams } from 'react-router-dom';
// import Skeleton from 'react-loading-skeleton';
// import { Card } from '@mui/material';

// const Product = () => {
//     const { id } = useParams();
//     const [data, setdata] = useState([]);
//     const [filter_data, setfilter_data] = useState(data);
//     const [filter_price, setfilter_price] = useState(0);
//     const [loading, setloading] = useState(false);
//     // let componentMounted = true;
//     // ======================================|| get dat from api||============================================
//     useEffect(() => {
//         const getProduct = async () => {
//             try {
//                 setloading(true);
//                 const res = await fetch("https://fakestoreapi.com/products/");
//                 // const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//                 const actualdata = await res.json();
//                 setdata(actualdata);
//                 setfilter_data(actualdata);
//                 // setfilter_price(actualdata);
//                 console.log(actualdata);
//                 setloading(false);
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//         getProduct();
//     }, [])

//     const Loading = () => {
//         return (
//             <>
//                 <h3 style={{ backgroundColor: '#9cbb5d', height: '100vh',color:'#000',fontSize:"2.5rem" }}> Loading...</h3>
//                 {/* <div className="col-md-3">
//                     <Skeleton height={350} />
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350} />
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350} />
//                 </div>
//                 <div className="col-md-3">
//                     <Skeleton height={350} />
//                 </div> */}
//             </>
//         )
//     };

//     const filtertProduct = (cat) => {
//         if (cat === 'all') {
//             setfilter_data(data);
//             return;
//         }
//         const updatedlist = data.filter((x) => x.category === cat);
//         setfilter_data(updatedlist);
//     }
//     {/* ==================================|| price filtering ||=============================== */ }

//     const filterPrice = (pri) => {
//         const updatePrice = data.filter((p) => p.price === pri);
//         setfilter_data(updatePrice);
//     }

//     const cocatstr = (str, length) => {
//         return str.length > length ? str.substr(1, length) + "..." : str;
//     }

//     const Showproduct = () => {
//         return (
//             <>
//                 <div className="buttons d-flex justify-content-center mb-2">
//                     <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct('all')} >All</button>
//                     <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("men's clothing")}>Men's clothing</button>
//                     <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("women's clothing")}>women's clothing</button>
//                     <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("jewelery")}>Jewellery</button>
//                     <button className="btn btn-primary text-white me-2" onClick={() => filtertProduct("electronics")}>Electronics</button>

//                     {/* ==================================|| price ||=============================== */}

//                     {/* <button className="btn btn-primary me-2" onClick={() => filterPrice(100)}>under 100</button>
//                     <button className="btn btn-primary me-2" onClick={() => filterPrice(200)}>under 200</button>
//                     <button className="btn btn-primary me-2" onClick={() => filterPrice(500)}>under 500</button>
//                     <button className="btn btn-primary me-2" onClick={() => filterPrice(1000)}>under 1000</button> */}
//                 </div>
//                 <h1>length:-{data.length}</h1>
//                 {filter_data.map((product) => {
//                     return (
//                         <>
//                             <div className="col-md-3 mb-2 ">
//                                 <div className="card product_card h-100 text-center p-4 " key={product.id}>
//                                     <img src={product.image} className='card-img-top' alt={product.title} height="250px" />
//                                     <div className="card-body">
//                                         <h5 className="card-title mb-0"> {product.title.substring(0, 12)}... </h5>
//                                         {/* <p className='card-text'>{ product.description}</p> */}
//                                         <p className='card-text'>{cocatstr(product.description, 48)}</p>
//                                         <p className="card-price">
//                                             {/* <span style={{ fontSize: "10px" }}> $ </span><span style={{ fontSize: "18px" }}> {parseInt(product.price)} </span> */}
//                                             ${parseInt(product.price)}
//                                         </p>

//                                         <NavLink to='/cart' className='btn btn-primary'>Add To Cart</NavLink>
//                                         {/* <NavLink to={`/product/${product.id}`} className="btn btn-primary"  >Buy Now</NavLink> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 })}

//             </>
//         )
//     }
//     return (
//         <>
//             <div className="container">
//                 <div className="row">
//                     <div className="col-12">
//                         {/* <div className="col-12 mb-5">
//                         <h1 className='display-6 fw-bolder text-center'>latest products</h1>
//                         <hr />
//                     </div> */}
//                         <div className="row justify-content-center">
//                             {loading ? <Loading /> : <Showproduct />}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Product;






// ========================--------------|| new product component ||----------------==============================

import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { NavLink, useParams } from 'react-router-dom';

const Product = () => {
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
                    <NavLink to="/cart" className="btn btn-primary m-1"  >Add to Cart</NavLink>
                    <NavLink to="/cart" className="btn btn-success"  >Go to Cart</NavLink>
                </div>
            </>
        )
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row py-4">
                    {loading ? <Loading /> : <Showproduct />}
                </div>
            </div>
        </div>
    )
}

export default Product;