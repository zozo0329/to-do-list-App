import React, { useState } from "react";
import userStyle from "./UserInput.module.css";
const UserInput = (props) => {
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const changeHandler = (e) => {
    setUserInput(e.target.value);
    if (userInput.trim().length >= 1) {
      setIsValid(true);
    }
  };
  const cancelHandler = () => {
    props.setIsOn(false);
    console.log("CLOSE");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (userInput.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const userData = {
      userInput,
      id: Math.random().toString(),
    };
    props.addInputHandler(userData);
    setUserInput("");
  };
  return (
    <>
      <div className={userStyle.backdrop} onClick={cancelHandler} />
      <div className={userStyle.modal}>
        <div className={userStyle.modalContent}>
          <div className={userStyle.modalHeader}>
            <h2
              className={`${userStyle["label"]} ${
                !isValid && userStyle.invalid
              }`}
            >
              Enter List
            </h2>
          </div>
          <form onSubmit={submitHandler}>
            <div className={userStyle.modalBody}>
              <input
                className={`${userStyle["input"]} ${
                  !isValid && userStyle.invalidInput
                }`}
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
    </>
  );
};

export default UserInput;
