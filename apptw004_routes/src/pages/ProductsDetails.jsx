import React from "react";
import { useParams, useNavigate } from 'react-router-dom';


const ProductsDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const onClick = () => {
    navigate('/products');
  }

  return (
    <>
      <h1>ProductsDetails Page</h1>
      <p>Product {params.productID}</p>
      <button type='button' onClick={onClick}>Back</button>
    </>
  );
}

export default ProductsDetails;