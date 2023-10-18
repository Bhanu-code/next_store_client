import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';

import { Route, Routes } from 'react-router-dom';

const App = () => {
  const user = true;
  return <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/:category" element={<ProductList />} />
    <Route path="/products/:id" element={<Product />} />
    <Route path="/register" element={ user ? <Home /> : <Register />} />
    <Route path="/login"
    element ={ user ? <Home /> : <Login /> }
    />
    <Route path="/cart" element={<Cart />} />
  </Routes>
  
  </>;
};

export default App;