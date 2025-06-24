import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const { pid } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await axios.get(`http://localhost:8000/inventory/${pid}`);
        
        if (response.data.success) {
          setProduct(response.data.product);
        } else {
          setError(response.data.message || 'Product not found in inventory');
        }
      } catch (err) {
        console.error("Fetch inventory error:", err);
        setError(err.response?.data?.message || err.message || 'Failed to load inventory item');
      } finally {
        setLoading(false);
      }
    };

    if (pid) {
      fetchProductDetails();
    } else {
      setError('No product ID provided');
      setLoading(false);
    }
  }, [pid]);

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Loading inventory details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <h3 style={styles.errorText}>{error}</h3>
        <button 
          style={styles.backButton}
          onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={styles.errorContainer}>
        <h3 style={styles.errorText}>Inventory item not found</h3>
        <button 
          style={styles.backButton}
          onClick={() => navigate('/inventory')}
        >
          Browse Inventory
        </button>
      </div>
    );
  }

  return (
    <div className="inventory-details" style={styles.container}>
      <h2 style={styles.title}>{product.productName}</h2>
      <img 
        src={product.image} 
        alt={product.productName} 
        style={styles.image} 
      />
      
      <div style={styles.detailsGrid}>
        <div style={styles.detailItem}>
          <strong>Price:</strong> ₹{product.price.toFixed(2)}
        </div>
        <div style={styles.detailItem}>
          <strong>SKU:</strong> {product.pid}
        </div>
        <div style={styles.detailItem}>
          <strong>Category:</strong> {product.category}
        </div>
        <div style={styles.detailItem}>
          <strong>Stock:</strong> {product.stockQuantity}
        </div>
        {product.color && (
          <div style={styles.detailItem}>
            <strong>Color:</strong> {product.color}
          </div>
        )}
        {product.size && (
          <div style={styles.detailItem}>
            <strong>Size:</strong> {product.size}
          </div>
        )}
      </div>

      <div style={styles.description}>
        <h3 style={styles.sectionTitle}>Description</h3>
        <p>{product.description}</p>
      </div>

      <div style={styles.actionButtons}>
        <button style={styles.primaryButton} onClick={() => navigate(`/inventory/edit/${pid}`)}>
          Edit Item
        </button>
        <button style={styles.secondaryButton} onClick={() => navigate('/inventory')}>
          Back to Inventory
        </button>
      </div>

      {showDetails && (
        <div style={styles.additionalDetails}>
          <h3 style={styles.sectionTitle}>Additional Details</h3>
          <ul style={styles.detailsList}>
            <li><strong>Added On:</strong> {new Date(product.addedDate).toLocaleDateString()}</li>
            <li><strong>Added By:</strong> {product.addedBy || 'System'}</li>
            {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
        </div>
      )}

      <button 
        style={styles.toggleButton}
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Hide Additional Details' : 'Show Additional Details'}
      </button>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: '2rem auto',
    padding: '2rem',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  title: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '1.5rem',
    textAlign: 'center'
  },
  image: {
    width: '100%',
    maxHeight: '400px',
    objectFit: 'contain',
    borderRadius: '8px',
    marginBottom: '1.5rem',
    border: '1px solid #eee'
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  detailItem: {
    padding: '0.8rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px'
  },
  description: {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px'
  },
  sectionTitle: {
    fontSize: '1.2rem',
    color: '#444',
    marginBottom: '0.5rem'
  },
  actionButtons: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '1.5rem'
  },
  primaryButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1
  },
  secondaryButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    flex: 1
  },
  additionalDetails: {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#f8f9fa',
    borderRadius: '4px'
  },
  detailsList: {
    listStyleType: 'none',
    paddingLeft: 0
  },
  toggleButton: {
    padding: '0.8rem',
    backgroundColor: '#17a2b8',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width: '100%'
  },
  loadingContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '50vh'
  },
  spinner: {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    width: '36px',
    height: '36px',
    borderRadius: '50%',
    borderLeftColor: '#09f',
    animation: 'spin 1s linear infinite',
    marginBottom: '1rem'
  },
  loadingText: {
    fontSize: '1.2rem',
    color: '#666'
  },
  errorContainer: {
    textAlign: 'center',
    padding: '2rem'
  },
  errorText: {
    color: '#dc3545',
    fontSize: '1.2rem',
    marginBottom: '1rem'
  },
  backButton: {
    padding: '0.8rem 1.5rem',
    backgroundColor: '#6c757d',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default ProductDetails;