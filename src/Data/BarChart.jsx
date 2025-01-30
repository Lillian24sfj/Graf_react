import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { fetchData } from "./fetchData"; 
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const loadChartData = async () => {
      const data = await fetchData();
      if (data) processChartData(data);
    };

    loadChartData();
  }, []);

  const processChartData = (data) => {
    const labels = Object.values(data.dimension.Tid.category.label);
    const values = Object.values(data.value);

    setChartData({
      labels,
      datasets: [
        {
          label: "Antall",
          data: values,
          backgroundColor: "rgb(230, 0, 118)", // Nøytral rosa
        },
      ],
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md mt-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Statistikk over innvandring</h2>
      <div className="bg-pink-50 p-4 rounded-lg shadow-sm">
        <Bar data={chartData} className="max-w-full h-64" />
      </div>
    </div>
  );
}
