import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (!token) {
      navigate("/login"); // 🔐 protect route
    } else {
      setUser(JSON.parse(storedUser || "{}"));
    }
  }, []);

  return (
    <div style={container}>
      <h1>Dashboard 🚀</h1>

      {user && (
        <div style={card}>
          <p><b>Name:</b> {user.name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Role:</b> {user.role}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

const container = {
  padding: "40px",
  color: "white",
};

const card = {
  background: "#1e293b",
  padding: "20px",
  borderRadius: "10px",
  marginTop: "20px",
};