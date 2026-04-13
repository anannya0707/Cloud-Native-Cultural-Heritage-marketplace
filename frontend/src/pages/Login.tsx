import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { apiCall } from "../utils/api";

const Login: React.FC = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await apiCall("/auth/login", "POST", formData);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/analytics");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      color: "white"
    }}>
      <div style={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        padding: "40px",
        borderRadius: "15px",
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        width: "100%",
        maxWidth: "400px"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Welcome Back</h2>
        {error && <p style={{ color: "#ff4d4d", textAlign: "center" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Email</label>
            <input
              type="email"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                outline: "none"
              }}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          <div style={{ marginBottom: "25px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Password</label>
            <input
              type="password"
              required
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "none",
                background: "rgba(255, 255, 255, 0.2)",
                color: "white",
                outline: "none"
              }}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "5px",
              border: "none",
              background: "linear-gradient(45deg, #6a11cb 0%, #2575fc 100%)",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "transform 0.2s"
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Don't have an account? <Link to="/signup" style={{ color: "#2575fc", textDecoration: "none" }}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
