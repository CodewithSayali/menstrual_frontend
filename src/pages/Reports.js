import React from "react";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";
import "../styles/Reports.css";
import "chart.js/auto";

function Reports({ periodDates }) {
  // Ensure periodDates is an array
  const datesArray = Array.isArray(periodDates) ? periodDates : [];

  // Convert dates to cycle lengths
  const cycleLengths = datesArray.map((date, i) => 
    i > 0 ? (new Date(date) - new Date(datesArray[i - 1])) / (1000 * 60 * 60 * 24) : null
  ).filter(length => length !== null);

  // Calculate average cycle length
  const avgCycleLength = cycleLengths.length > 0 ? 
    (cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length).toFixed(1) 
    : "Not enough data";

  // Graph data
  const chartData = {
    labels: datesArray.slice(1).map(date => new Date(date).toDateString()), // X-axis labels (dates)
    datasets: [{
      label: "Cycle Length (days)",
      data: cycleLengths, // Y-axis values
      fill: false,
      backgroundColor: "#ff4d6d",
      borderColor: "#ff4d6d"
    }]
  };

  return (
    <div className="reports-container">
      <h2>Cycle Reports</h2>
      <h3>Average Cycle Length: {avgCycleLength} days</h3>

      <div className="chart-container">
        <Line data={chartData} />
      </div>
    </div>
  );
}

// Add default props to ensure periodDates is always an array
Reports.defaultProps = {
  periodDates: [],
};

// Add prop types to validate periodDates
Reports.propTypes = {
  periodDates: PropTypes.arrayOf(PropTypes.string),
};

export default Reports;
