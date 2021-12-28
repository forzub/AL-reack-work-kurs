import React from "react";
import { Link, useLocation } from 'react-router-dom';

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams.get('sort'));

  return (
    <>
      <h1>Products Page</h1>
      <ul>
        <li><Link to='/products/1'> product 1</Link></li>
        <li><Link to='/products/2'> product 2</Link></li>
        <li><Link to='/products/3'> product 3</Link></li>
      </ul>
    </>
  );
}

export default Products;