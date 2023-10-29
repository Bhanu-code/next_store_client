import Home from './pages/Home';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import Register from './pages/Register';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Success from './pages/Success';
import Logout from './pages/Logout'


import { Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(state => state.user.currentUser);
  return <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/:category" element={<ProductList />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/register" element={user ? <Home /> : <Register />} />
      <Route path="/login"
        element={user ? <Home /> : <Login />}
      />
      <Route path="/logout"
        element={user ? <Logout /> : <Home />}
      />
      <Route path="/cart" element={<Cart />} />
      <Route path="/success" element={<Success />} />

    </Routes>

  </>;
};

export default App;