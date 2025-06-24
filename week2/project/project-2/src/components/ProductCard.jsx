import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
        <img
          src={product.image}
          alt={product.title}
          width="100%"
          height="200px"
          style={{ objectFit: 'contain' }}
        />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <small>{product.category}</small>
      </div>
    </Link>
  );
}

export default ProductCard;
