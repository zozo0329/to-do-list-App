import React from "react";
import "./Output.css";
import OutputList from "./List/OutputList";
import CheckedItems from "./List/CheckedItems";
const Output = () => {
  return (
    <div className="Output">
      <div className="output-container">
        <div className="list">
          <OutputList />
        </div>
        <div className="checked-list">
          <CheckedItems />
        </div>
      </div>
    </div>
  );
};

export default Output;
