import React, { useEffect, useState } from "react";

const SalesChart = ({ title, data, xLabel, yLabel }) => {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    // You can fetch the chart images dynamically from your Flask server
    let endpoint = "";

    if (title === "Sales Trend Over Time") {
      endpoint = "/api/sales-plot/date";
    } else if (title === "Sales by Region") {
      endpoint = "/api/sales-plot/region";
    } else if (title === "Sales by Product Category") {
      endpoint = "/api/sales-plot/category";
    }

    // Fetch chart image from Flask backend
    fetch(`http://localhost:5000${endpoint}`)
      .then((response) => response.blob())
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setImgSrc(imageObjectURL);
      })
      .catch((error) => console.error("Error fetching chart image:", error));
  }, [title]);

  return (
    <div>
      <h3>{title}</h3>
      {imgSrc ? <img src={imgSrc} alt={title} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default SalesChart;
