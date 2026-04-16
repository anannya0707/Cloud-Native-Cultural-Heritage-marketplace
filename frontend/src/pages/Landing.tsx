import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div style={container}>
      
      {/* HERO */}
      <h1 style={title}>
        Discover India's Cultural Heritage 🇮🇳
      </h1>

      <p style={subtitle}>
        Explore crafts, cities, and traditions through an interactive map
      </p>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <button onClick={() => navigate("/login")} style={btnPrimary}>
          Get Started
        </button>

        <button onClick={() => navigate("/signup")} style={btnOutline}>
          Create Account
        </button>
      </div>

      {/* FEATURES */}
      <div style={features}>
        <div>🗺️ Interactive India Map</div>
        <div>🏺 Cultural Crafts</div>
        <div>📊 Analytics Insights</div>
      </div>

    </div>
  );
}

export default Landing;

const container = {
  height: "100vh",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center" as const,
  background: "linear-gradient(135deg, #0f172a, #1e293b)",
  color: "white",
  padding: "20px"
};

const title = {
  fontSize: "2.8rem",
  fontWeight: "bold"
};

const subtitle = {
  marginTop: "10px",
  opacity: 0.8
};

const btnPrimary = {
  padding: "12px 25px",
  background: "#7c3aed",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const btnOutline = {
  padding: "12px 25px",
  border: "1px solid white",
  background: "transparent",
  color: "white",
  borderRadius: "8px",
  cursor: "pointer"
};

const features = {
  marginTop: "40px",
  display: "flex",
  gap: "30px",
  opacity: 0.8
};