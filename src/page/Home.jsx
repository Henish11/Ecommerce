import axios from "axios";
import React, { useEffect, useState } from "react";
import { PRODUCT_URL } from "../utils";
import Product from "../componnent/Product";
import Filter from "../componnent/Filter";
import Search from "../componnent/Search";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const getProducts = async () => {
    await axios
      .get(PRODUCT_URL)
      .then((response) => {
        setProducts(response?.data?.products);
        setFilterProducts(response?.data?.products);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  // Infinite-Scroll
  // const handleScroll = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >=
  //     document.documentElement.scrollHeight
  //   ) {
  //     setOffset((prev) => prev + 16);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <section className="container productMain">
      <div className="sidebar">
        <Search 
          filterProducts={filterProducts}
          products={products}
          setProducts={setProducts}
        />
        <h2>Filter</h2>
        <Filter
          filterProducts={filterProducts}
          products={products}
          setProducts={setProducts}
        />
      </div>
      <div className="product-wrap">
        {products.length !== 0 &&
          products.map((item) => {
            return <Product item={item} key={item.id} />;
          })}
      </div>
    </section>
  );
};

export default Home;
