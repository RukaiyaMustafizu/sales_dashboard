import React, { useState, useEffect } from "react";
import axios from "axios";
import SalesChart from "./SalesChart"; // This will be for charts
import SalesData from "./SalesData"; // This will be for data display

const App = () => {
  const [salesData, setSalesData] = useState(null);

  useEffect(() => {
    // Fetch sales data from Flask API
    axios.get("http://localhost:5000/api/sales").then((response) => {
      setSalesData(response.data);
    });
  }, []);

  if (!salesData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Sales Dashboard</h1>
      <SalesData data={salesData} />
      <div>
        <SalesChart
          title="Sales Trend Over Time"
          data={salesData.sales_by_date}
          xLabel="Date"
          yLabel="Total Sales (€)"
        />
        <SalesChart
          title="Sales by Region"
          data={salesData.sales_by_region}
          xLabel="Region"
          yLabel="Total Sales (€)"
        />
        <SalesChart
          title="Sales by Product Category"
          data={salesData.sales_by_category}
          xLabel="Product Category"
          yLabel="Total Sales (€)"
        />
      </div>
    </div>
  );
};

export default App;
