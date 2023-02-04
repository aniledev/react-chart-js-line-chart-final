import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Container } from "./Container";
import { Title } from "./Ttitle";
import { data as sourceData } from "./data";
import "./styles.css";

// Register components to work in React implementation
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

ChartJS.defaults.font = {
  family: "Helvetica"
};

// Define custom chart options
export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      responsive: true,
      maxHeight: 100
    }
  },
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Months",
        padding: {
          top: 25
        },
        font: {
          size: 20,
          weight: "bold"
        }
      },
      ticks: {
        font: {
          size: 15
        }
      }
    },
    y: {
      display: true,
      beginAtZero: true,
      title: {
        display: true,
        text: "Number of Visitors",
        padding: {
          bottom: 25
        },
        font: {
          size: 20,
          weight: "bold"
        }
      },
      ticks: {
        font: {
          size: 15
        }
      }
    }
  }
};

// Define chart data and labels
export const data = {
  type: "line",
  labels: Object.keys(sourceData),
  datasets: [
    {
      label: "Number of Website Visitors",
      id: 1,
      data: Object.values(sourceData),
      tension: 0.1,
      borderColor: "rgb(39, 70, 144)",
      backgroundColor: "rgb(79, 117, 207)",
      xAxisID: "x"
    }
  ]
};

export default function App() {
  return (
    <Container className="App">
      <Title>Website Visitors by Month</Title>
      <Line options={options} data={data} datasetIdKey="id" />
    </Container>
  );
}
