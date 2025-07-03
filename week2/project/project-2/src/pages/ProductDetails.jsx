import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './ProductDetails.module.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error || !product) return <p>Failed to load product.</p>;

  return (
    <div className={styles.container}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} className={styles.image} />
      <p>{product.description}</p>
      <strong>${product.price}</strong>
    </div>
  );
}

export default ProductDetails;
