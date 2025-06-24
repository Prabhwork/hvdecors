import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

const ProductInventory= () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/product-data");
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container>
      <h2 className="text-center my-4">All Products</h2>
      <Row>
        {loading ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <Col lg="4" md="6" sm="12" key={product._id} className="mb-4">
              <div style={{
                padding: "15px",
                border: "1px solid #ddd",
                borderRadius: "10px",
                textAlign: "center",
                background: "#fff",
              }}>
                <img src={product.image} alt={product.productName} style={{ width: "100%", maxHeight: "250px", objectFit: "cover" }} />
                <h5>{product.productName}</h5>
                <p>{product.description}</p>
                <p><strong>₹{product.price}</strong></p>
                <p>Rating: {product.rating}%</p>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default ProductInventory;

