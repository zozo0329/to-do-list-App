import React, { useState } from "react";
import userStyle from "./UserInput.module.css";
const UserInput = (props) => {
  const [userInput, setUserInput] = useState("");
  const changeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const cancelHandler = () => {
    props.setIsOn(false);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      userInput,
      id: Math.random().toString(),
    };
    props.userInput(userData);
    // CLEANER
    setUserInput("");
  };
  return (
    <div className="UserInput">
      <div className={userStyle.modal}>
        <div className={userStyle.modalContent}>
          <div className={userStyle.modalHeader}>
            <h2>Enter List</h2>
          </div>
          <form onSubmit={submitHandler}>
            <div className={userStyle.modalBody}>
              <input
                className={userStyle.input}
                type="text"
                onChange={changeHandler}
                value={userInput}
              />
            </div>
            <div className={userStyle.modalFooter}>
              <div className={userStyle.button}>
                <button
                  className={userStyle.buttonStyle}
                  type="button"
                  onClick={cancelHandler}
                >
                  Cancel
                </button>
                <button className={userStyle.buttonStyle} type="submit">
                  Confirm
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserInput;
