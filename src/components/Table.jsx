import { AgGridReact } from "ag-grid-react";
import React from "react";

const Table = () => {
  const rows = [
    {
      campaigns: "Cosmetics",
      clicks: 712,
      cost: 4272,
      conversions: 8,
      revenue: 16568,
    },
    {
      campaigns: "Serums",
      clicks: 3961,
      cost: 27331,
      conversions: 115,
      revenue: 362526,
    },
    {
      campaigns: "Facewash",
      clicks: 9462,
      cost: 76831,
      conversions: 123,
      revenue: 266800,
    },
    {
      campaigns: "Shampoos",
      clicks: 439,
      cost: 2151,
      conversions: 5,
      revenue: 11029,
    },
    {
      campaigns: "Conditioners",
      clicks: 1680,
      cost: 3864,
      conversions: 49,
      revenue: 175245,
    },
    {
      campaigns: "Facewash 2",
      clicks: 4978,
      cost: 29370,
      conversions: 189,
      revenue: 623106,
    },
    {
      campaigns: "Total",
      clicks: 26150,
      cost: 143819,
      conversions: 489,
      revenue: 1573563,
    },
  ];

  const columnDefs = [
    {
      headerName: "Campaigns",
      field: "campaigns",
      width: 130,
    },
    {
      headerName: "Clicks",
      field: "clicks",
      width: 100,
    },
    {
      headerName: "Cost",
      field: "cost",
      width: 140,
      cellRenderer: (params) => `USD ${params.value}`,
    },
    {
      headerName: "Conversions",
      field: "conversions",
      width: 120,
    },
    {
      headerName: "Revenue",
      field: "revenue",
      width: 130,
      cellRenderer: (params) => `USD ${params.value}`,
    },
  ];

  return (
    <div
      className="ag-theme-quartz "
      style={{ height: 386, textAlign: "start" }}
    >
      <AgGridReact rowData={rows} columnDefs={columnDefs} />
    </div>
  );
};

export default Table;
