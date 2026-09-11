import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Products could not be loaded.');
        }
        if (!Array.isArray(data)) {
          throw new Error('Invalid products response.');
        }
        setProducts(data);
      } catch (error) {
        console.error(error);
        setError('Products are temporarily unavailable. Please make sure the server and database are running.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="shop-container">
      <h2>All Products</h2>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div role="alert">{error}</div>
      ) : (
        filteredProducts.length === 0 ? (
          <div>No products found.</div>
        ) : (
          <div className="product-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )
      )}
    </div>
  );
};

export default Shop;
