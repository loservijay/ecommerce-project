import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:9000/api/products`)
      .then(res => {
        const found = res.data.find(item => item.id === parseInt(id));
        setProduct(found);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <Link to="/" style={{ textDecoration: 'none', marginBottom: '1rem', display: 'inline-block' }}>← Back to Products</Link>
      <div style={{
        display: "flex",
        gap: "2rem",
        alignItems: "center"
      }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "300px", height: "300px", objectFit: "cover", borderRadius: "8px" }}
        />
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <strong style={{ fontSize: "1.5rem" }}>₹{product.price}</strong>
          <br /><br />
          <button style={{
            padding: "10px 20px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer"
          }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;

