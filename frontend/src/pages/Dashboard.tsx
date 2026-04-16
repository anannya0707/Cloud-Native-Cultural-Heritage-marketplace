import IndiaMap from "../components/IndiaMap";

function Dashboard() {
  return (
    <div style={container}>
      <h2 style={{ marginBottom: "20px" }}>
        Explore India 🌍
      </h2>

      <IndiaMap />
    </div>
  );
}

export default Dashboard;

const container = {
  minHeight: "100vh",
  background: "#0f172a",
  color: "white",
  padding: "20px"
};