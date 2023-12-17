import { AgGridReact } from "ag-grid-react";
import React from "react";

const Minitable = () => {
  const rows = [
    {
      group: "Male",
      clicks: 348,
      cost: 12528,
      conversions: 42,
      revenue: 62118,
    },
    {
      group: "Female",
      clicks: 692,
      cost: 24912,
      conversions: 35,
      revenue: 5175,
    },
    {
      group: "Unknown",
      clicks: 105,
      cost: 3943,
      conversions: 3,
      revenue: 4489,
    },
    {
      group: "Total",
      clicks: 1145,
      cost: 41383,
      conversions: 80,
      revenue: 71782,
    },
  ];

  const columnDefs = [
    {
      headerName: "Group",
      field: "group",
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
    },
  ];

  return (
    <div
      className="ag-theme-quartz "
      style={{ height: 350, textAlign: "start" }}
    >
      <AgGridReact rowData={rows} columnDefs={columnDefs} />
    </div>
  );
};

export default Minitable;
