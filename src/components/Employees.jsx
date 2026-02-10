import React from "react";
import { EmployeeList } from "./EmployeeList";

export const Employees = () => {
  var title = "EMPLOYEE APP";

  var compnay = {
    name: "Google",
    year: 2026,
  };

  var employees = [
    { id: 101, name: "Hetansh", age: 21 },
    { id: 102, name: "Yash", age: 24 },
    { id: 103, name: "Nisarg", age: 20 },
    { id: 104, name: "Piyush", age: 22 },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Employees</h1>
      {/* //title = {title}   key = {value}  */}
      <EmployeeList title={title} company={compnay} employees = {employees}></EmployeeList>
    </div>
  );
};