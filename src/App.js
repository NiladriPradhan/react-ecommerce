import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/page/Home';
import Navbar from './component/page/Navbar';
import Errorpage from './component/page/Error/Errorpage';
import Products from './component/page/Products';
import Product from './component/page/Product';
import ProductDetails from './component/page/ProductDetails';
import Cart from './component/page/Cart';
import About from './component/page/About';
import Contact from './component/page/Contact';
import Login from './component/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
