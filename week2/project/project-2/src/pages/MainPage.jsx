import { useState, useEffect } from 'react';
import CategoryList from '../components/CategoryList';
import ProductList from '../components/ProductList';
import styles from './MainPage.module.css';

function MainPage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const url = selectedCategory
      ? `https://fakestoreapi.com/products/category/${selectedCategory}`
      : 'https://fakestoreapi.com/products';

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        setError(true);
        setProducts([]);
      })
      .finally(() => setLoading(false));
  }, [selectedCategory]);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Ecommerce Shop</h1>

      {error && <p className={styles.error}>Error fetching data!</p>}
      {loading ? (
        <p className={styles.loading}>Loading...</p>
      ) : (
        <>
          <CategoryList
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
          <ProductList products={products} />
        </>
      )}
    </div>
  );
}

export default MainPage;
