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

      if (!data?.token) {
        throw new Error("Login failed. No token received.");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // 🚀 GO TO DASHBOARD
      navigate("/dashboard");

    } catch (err: any) {
      setError(err.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Welcome Back</h2>

        {error && <p style={errorStyle}>{error}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            required
            style={input}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            required
            style={input}
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />

          <button type="submit" disabled={loading} style={button}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "15px" }}>
          Don't have an account?{" "}
          <Link to="/signup" style={link}>Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

// 🎨 styles same as signup
const container = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "80vh",
  color: "white",
};

const card = {
  background: "rgba(255,255,255,0.1)",
  padding: "40px",
  borderRadius: "12px",
  width: "350px",
};

const input = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  borderRadius: "6px",
  border: "none",
};

const button = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "none",
  background: "#2575fc",
  color: "white",
  fontWeight: "bold",
};

const link = { color: "#4facfe" };

const errorStyle = {
  color: "red",
  textAlign: "center" as const,
};