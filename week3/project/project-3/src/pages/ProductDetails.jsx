import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import heartEmpty from "../assets/heart-regular.svg";
import heartFull from "../assets/heart-solid.svg";

function ProductDetails() {
  const { id } = useParams();
  const { data: product, loading, error } = useFetch(`https://fakestoreapi.com/products/${id}`);
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const isFavourite = favourites.includes(Number(id));

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p>{product.description}</p>
      <button onClick={() => toggleFavourite(product.id)}>
        <img src={isFavourite ? heartFull : heartEmpty} alt="favourite" width="20" />
      </button>
    </div>
  );
}

export default ProductDetails;
