import React, { useState } from "react";
import ReactDOM from "react-dom";
import userStyle from "./UserInput.module.css";

const Backdrop = (props) => {
  return <div className={userStyle.backdrop} onClick={props.onClick} />;
};
const Modal = (props) => {
  return (
    <div className={userStyle.modal}>
      <div className={userStyle.modalContent}>
        <div className={userStyle.modalHeader}>
          <h2
            className={`${userStyle.label} ${
              !props.isValid && userStyle.invalid
            }`}
          >
            Enter List
          </h2>
        </div>
        <form onSubmit={props.onSubmit}>
          <div className={userStyle.modalBody}>
            <input
              className={`${userStyle.input} ${
                !props.isValid && userStyle.invalidInput
              }`}
              type="text"
              onChange={props.onChange}
              value={props.value}
            />
          </div>
          <div className={userStyle.modalFooter}>
            <div className={userStyle.button}>
              <button
                className={userStyle.buttonStyle}
                type="button"
                onClick={props.onClick}
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
  );
};
const UserInput = (props) => {
  const [userInput, setUserInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  const changeHandler = (e) => {
    setUserInput(e.target.value);
    if (userInput.trim().length > 0) {
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
      {ReactDOM.createPortal(
        <Backdrop onClick={cancelHandler} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          onSubmit={submitHandler}
          onClick={cancelHandler}
          onChange={changeHandler}
          value={userInput}
          isValid={isValid}
        />,
        document.querySelector("#modal-root")
      )}
    </>
  );
};

export default UserInput;
