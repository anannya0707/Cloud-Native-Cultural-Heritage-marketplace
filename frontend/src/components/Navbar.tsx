import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
    window.location.reload(); // ensures UI refresh
  };

  return (
    <nav style={nav}>
      <div style={logo}>Heritage Marketplace</div>

      <div style={links}>
        {token ? (
          <>
            <Link to="/dashboard" style={link}>Dashboard</Link>

            <button onClick={handleLogout} style={logoutBtn}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={link}>Login</Link>
            <Link to="/signup" style={signupBtn}>Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

/* styles */

const nav = {
  padding: "15px",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(5px)",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const logo = {
  fontWeight: "bold",
  fontSize: "1.2rem",
  color: "white",
};

const links = {
  display: "flex",
  gap: "20px",
  alignItems: "center",
};

const link = {
  color: "white",
  textDecoration: "none",
};

const signupBtn = {
  background: "white",
  color: "#333",
  padding: "5px 12px",
  borderRadius: "5px",
  textDecoration: "none",
};

const logoutBtn = {
  background: "transparent",
  border: "1px solid white",
  color: "white",
  padding: "5px 12px",
  borderRadius: "5px",
  cursor: "pointer",
};