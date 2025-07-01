import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavouritesContext } from "../context/FavouritesContext";
import heartEmpty from "../assets/heart-regular.svg";
import heartFull from "../assets/heart-solid.svg";

function ProductCard({ product }) {
  const { favourites, toggleFavourite } = useContext(FavouritesContext);
  const isFavourite = favourites.includes(product.id);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "15px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        transition: "transform 0.2s",
        backgroundColor: "#fff",
      }}
    >
      <Link
        to={`/product/${product.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "100%", height: "150px", objectFit: "contain" }}
        />
        <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
        <p style={{ color: "green", fontWeight: "bold" }}>${product.price}</p>
      </Link>
      <button
        onClick={() => toggleFavourite(product.id)}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        <img
          src={isFavourite ? heartFull : heartEmpty}
          alt="favourite"
          style={{ width: "24px", height: "24px" }}
        />
      </button>
    </div>
  );
}

export default ProductCard;
