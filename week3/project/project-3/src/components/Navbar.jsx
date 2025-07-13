import { Link } from "react-router-dom";

function Navbar({ onHomeClick }) {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px",
        marginBottom: "20px", 
      }}
    >
      <Link to="/" onClick={onHomeClick} style={{ color: "white", marginRight: "15px", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/favourites" style={{ color: "white", textDecoration: "none" }}>
        Favourites
      </Link>
    </nav>
  );
}

export default Navbar;
