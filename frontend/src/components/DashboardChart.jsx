import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function DashboardChart({ products }) {
  const data = {
    labels: products.map((p) => p.name),

    datasets: [
      {
        label: "Stock Quantity",
        data: products.map((p) => p.quantity),
         backgroundColor: [
      "#00BFFF",
      "#FF6384",
      "#0d8635",
      "#FFCE56",
      "#4BC0C0",
      "#9966FF",
    ],
     borderColor: "#ffffff",
    borderWidth: 2,
     },
    ],
  };
  const options = {
  plugins: {
    legend: {
      labels: {
        color: "white",
      },
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "rgba(255,255,255,0.2)",
      },
    },
    y: {
      ticks: {
        color: "white",
      },
      grid: {
        color: "rgba(255,255,255,0.2)",
      },
    },
  },
};

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default DashboardChart;