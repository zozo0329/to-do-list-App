import React from "react";
import "./OutputList.css";
const OutputList = (props) => {
  return (
    <div className="OutputList">
      <h1>List Items</h1>
      <ul>
        {props.userInfo.map((userData) => {
          return <li key={userData.id}>{userData.userInput}</li>;
        })}
      </ul>
    </div>
  );
};

export default OutputList;
