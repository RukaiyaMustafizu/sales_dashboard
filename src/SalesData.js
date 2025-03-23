import React from "react";

const SalesData = ({ data }) => {
  return (
    <div>
      <h2>Sales Data</h2>
      <div>
        <h3>Sales by Date</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Total Sales (€)</th>
            </tr>
          </thead>
          <tbody>
            {data.sales_by_date.map((entry) => (
              <tr key={entry.Date}>
                <td>{entry.Date}</td>
                <td>{entry["Sales €"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Sales by Region</h3>
        <table>
          <thead>
            <tr>
              <th>Region</th>
              <th>Total Sales (€)</th>
            </tr>
          </thead>
          <tbody>
            {data.sales_by_region.map((entry) => (
              <tr key={entry.Region}>
                <td>{entry.Region}</td>
                <td>{entry["Sales €"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3>Sales by Product Category</h3>
        <table>
          <thead>
            <tr>
              <th>Product Category</th>
              <th>Total Sales (€)</th>
            </tr>
          </thead>
          <tbody>
            {data.sales_by_category.map((entry) => (
              <tr key={entry["Product Category"]}>
                <td>{entry["Product Category"]}</td>
                <td>{entry["Sales €"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesData;
