import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Categories from './components/Categories';
import Products from './components/Products'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div style={{ overflow: 'hidden' }} >
            <Announcement />
            <Navbar />
            <Slider/>
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
            <ToastContainer />
        </div>
    )
}

export default Home