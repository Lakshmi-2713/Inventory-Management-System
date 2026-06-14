import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function CategoryPieChart({ products }) {
  const categories = {};

  products.forEach((product) => {
    categories[product.category] =
      (categories[product.category] || 0) + 1;
  });

  const data = {
    labels: Object.keys(categories),
    datasets: [
      {
        data: Object.values(categories),
        backgroundColor: [
          "#dfa5d4",
          "#6e90c6c3",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
        ],
      },
    ],
  };

  return (
    <div style={{ width: "40%", margin: "auto" }}>
      <h2>Category Distribution</h2>
      <Pie data={data} />
    </div>
  );
}

export default CategoryPieChart;