import { useContext, useEffect, useState } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import ProductList from "../components/ProductList";

function FavouritesPage() {
  const { favourites } = useContext(FavouritesContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (favourites.length > 0) {
      Promise.all(
        favourites.map((id) =>
          fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
        )
      ).then(setProducts);
    } else {
      setProducts([]);
    }
  }, [favourites]);

  return (
    <div>
      <h1>Favourites</h1>
      {products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <p>No favourites yet.</p>
      )}
    </div>
  );
}

export default FavouritesPage;
