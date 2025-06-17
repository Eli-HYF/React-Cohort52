import { useState } from 'react';
import allProducts from './fake-data/all-products';
import allCategories from './fake-data/all-categories';
import ProductList from './components/ProductList';
import CategoryList from './components/CategoryList';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const cleanCategory = selectedCategory?.replace('FAKE: ', '');
  const filteredProducts = selectedCategory
    ? allProducts.filter(p => p.category === cleanCategory)
    : allProducts;

  return (
    <div>
      <h1>Ecommerce Shop</h1>
      <CategoryList
        categories={allCategories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={filteredProducts} />
    </div>
  );
}

export default App;
