import { useState } from "react";
import salesData from "../data/salesData";
import SalesChart from "../components/SalesChart";
import { getPrediction } from "../utils/predict";
import { calculateBreakEven } from "../utils/breakeven";

function Analytics() {
  // Initial data
  const initialData = salesData.map((d) => d.sales);

  // State for dynamic input
  const [dataPoints, setDataPoints] = useState<number[]>(initialData);
  const [newValue, setNewValue] = useState("");

  // Labels for past data
  const labels = dataPoints.map((_, i) => `Point ${i + 1}`);

  // -------- FUTURE PREDICTION LOGIC --------
  const futureSteps = 4;

  const extendedData = [...dataPoints];
  for (let i = 0; i < futureSteps; i++) {
    extendedData.push(0); // placeholder
  }

  const futurePredicted = getPrediction(extendedData);

  const futureLabels = [
    ...dataPoints.map((_, i) => `Point ${i + 1}`),
    ...Array.from({ length: futureSteps }, (_, i) => `Future ${i + 1}`)
  ];

  // -------- BREAK-EVEN --------
  const fixedCost = 1000;
  const price = 50;
  const variableCost = 20;
  const breakEven = calculateBreakEven(fixedCost, price, variableCost);

  return (
    <div style={{ padding: "20px", textAlign: "center", color: "white" }}>
      
      {/* Title */}
      <h1>Craft Sales Analytics</h1>
      <p>
        This system analyzes historical sales data and predicts future trends 
        using polynomial regression for better decision-making.
      </p>

      {/* Input Section */}
      <div style={{ marginTop: "20px" }}>
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          placeholder="Enter new sales value"
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <button
          onClick={() => {
            if (newValue) {
              setDataPoints([...dataPoints, Number(newValue)]);
              setNewValue("");
            }
          }}
          style={{ padding: "8px 12px", cursor: "pointer" }}
        >
          Add Data
        </button>
      </div>

      {/* 📊 Graph 1: Past Data */}
      <div style={{ marginTop: "30px" }}>
        <h2>Historical Sales Analysis</h2>
        <SalesChart
          labels={labels}
          actual={dataPoints}
          predicted={[]}
        />
      </div>

      {/* 📈 Graph 2: Future Prediction */}
      <div style={{ marginTop: "30px" }}>
        <h2>Sales Forecast</h2>
        <SalesChart
          labels={futureLabels}
          actual={[...dataPoints, ...Array(futureSteps).fill(null)]}
          predicted={futurePredicted}
        />
      </div>

      {/* 💰 Break-even Analysis */}
      <div style={{ marginTop: "30px" }}>
        <h2>Break-Even Analysis</h2>
        <p>Fixed Cost: ₹{fixedCost}</p>
        <p>Price per Unit: ₹{price}</p>
        <p>Variable Cost per Unit: ₹{variableCost}</p>
        <h3>Break-Even Units: {breakEven.toFixed(2)}</h3>
      </div>

    </div>
  );
}

export default Analytics;