import useFetch from "../hooks/useFetch";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";

function HomePage({ selectedCategory, setSelectedCategory }) {
  const url = selectedCategory
    ? `https://fakestoreapi.com/products/category/${selectedCategory}`
    : "https://fakestoreapi.com/products";

  const { data: products, loading, error } = useFetch(url);
  const { data: categories } = useFetch("https://fakestoreapi.com/products/categories");

  if (error) return <p>Error fetching products</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <CategoryList
        categories={categories || []}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ProductList products={products || []} />
    </>
  );
}

export default HomePage;
