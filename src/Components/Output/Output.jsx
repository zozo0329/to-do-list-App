import React from "react";
import "./Output.css";
import OutputList from "./List/OutputList";
import CheckedItems from "./List/CheckedItems";
const Output = (props) => {
  return (
    <div className="Output">
      <div className="output-container">
        <div className="list">
          <OutputList
            setUserData={props.setUserData}
            userInfo={props.userInfo}
            setUserInfo={props.setUserInfo}
          />
        </div>
        <div className="checked-list">
          <CheckedItems userData={props.userData} />
        </div>
      </div>
    </div>
  );
};

export default Output;
