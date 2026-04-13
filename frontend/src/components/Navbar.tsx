import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "15px", background: "rgba(255, 255, 255, 0.1)", backdropFilter: "blur(5px)", display: "flex", justifyContent: "space-between" }}>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem", color: "white" }}>Heritage Marketplace</div>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/explore" style={{ color: "white", textDecoration: "none" }}>Explore</Link>
        <Link to="/analytics" style={{ color: "white", textDecoration: "none" }}>Analytics</Link>
        <Link to="/login" style={{ color: "white", textDecoration: "none", border: "1px solid white", padding: "2px 10px", borderRadius: "5px" }}>Login</Link>
        <Link to="/signup" style={{ color: "white", textDecoration: "none", background: "white", color: "#333", padding: "2px 10px", borderRadius: "5px" }}>Signup</Link>
      </div>
    </nav>
  );
}

export default Navbar;