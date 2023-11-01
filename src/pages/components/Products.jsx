import styled from "styled-components";
// import { popularProducts } from "../data"
import Product from "./Product"
import { useState, useEffect } from "react";
import axios from "axios";


import { ColorRing } from 'react-loader-spinner';

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
`

const Products = ({ cat, filters, sort }) => {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])


  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `${import.meta.env.VITE_URL}products?category=${cat}`
            : `${import.meta.env.VITE_URL}products`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <>
      <h2 style={{ display: 'flex', justifyContent: "center", alignItems: "center" }}>Trending Products</h2>
      {products.length > 0 ?
        <Container>
          {
            cat ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
              : products
                .slice(2, 10)
                .map((item) => <Product item={item} key={item.id} />)}
        </Container>
        :
        <div style={{ display: "flex", justifyContent: "center"}}>
          <ColorRing
            visible={true}
            height="50"
            width="50"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['black']}
          />
        </div>
      }
    </>

  );
};

export default Products