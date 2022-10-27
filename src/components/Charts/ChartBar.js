import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartBar = ({ chartData }, props) => {
  return <Bar data={chartData} options={{ indexAxis: "y" }} />;
};

export default ChartBar;
