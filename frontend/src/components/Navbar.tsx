import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-around",
      padding: "15px",
      background: "#0f172a",
      color: "white"
    }}>
      <Link to="/">Home</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/analytics">Analytics</Link>
    </nav>
  );
}

export default Navbar;