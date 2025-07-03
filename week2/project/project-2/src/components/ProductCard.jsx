import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className={styles.link}>
      <div className={styles.card}>
        <img
          src={product.image}
          alt={product.title}
          className={styles.image}
        />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <small>{product.category}</small>
      </div>
    </Link>
  );
}

export default ProductCard;
