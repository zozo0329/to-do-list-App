import React from "react";
import userStyle from "./UserInput.module.css";
const UserInput = (props) => {
  const cancelHandler = () => {
    props.setIsOn(false);
  };

  return (
    <div className="UserInput">
      <div className={userStyle.modal}>
        <div className={userStyle.modalContent}>
          <div className={userStyle.modalHeader}>
            <h2>Enter List</h2>
          </div>
          <form>
            <div className={userStyle.modalBody}>
              <input className={userStyle.input} type="text" />
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
