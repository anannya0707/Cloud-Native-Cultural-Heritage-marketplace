import {
  Line
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

type Props = {
  labels: string[];
  actual: number[];
  predicted: number[];
};

function SalesChart({ labels, actual, predicted }: Props) {
  const data = {
    labels,
    datasets: [
      {
        label: "Actual Sales",
        data: actual,
        borderColor: "blue",
        tension: 0.3,
      },
      {
        label: "Predicted Sales",
        data: predicted,
        borderColor: "red",
        tension: 0.3,
      },
    ],
  };

  return <Line data={data} />;
}

export default SalesChart;