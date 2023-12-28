import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';


import { Route, Routes } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const App = () => {
  const token = document.cookie.includes('jwt')
 
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/register" element={token ? <Home/> : <Register />} />
      <Route path="/login"
        element={token ? <Home/> : <Login />}
      />
      
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />

    </Routes>

  </>;
};

export default App;