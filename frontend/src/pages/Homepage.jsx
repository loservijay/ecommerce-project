import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:9000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1 style={{ textAlign: "center" }}>🛍 Products</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "1.5rem"
      }}>
        {products.map(product => (
          <div key={product.id} style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "1rem",
            textAlign: "center",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
          }}>
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "4px" }}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <strong style={{ fontSize: "1.2rem" }}>₹{product.price}</strong>
            <br />
            <Link
              to={`/product/${product.id}`}
              style={{
                display: "inline-block",
                marginTop: "10px",
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "4px"
              }}
            >
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

