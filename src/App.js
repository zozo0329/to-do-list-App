import { useState } from "react";
import "./App.css";
import Plus from "./Components/UI/Plus";
import UserInput from "./Components/UserInput/UserInput";
import Output from "./Components/Output/Output";
function App() {
  const [userInfo, setUserInfo] = useState([]);
  const userInput = (userData) => {
    setUserInfo((prevData) => {
      return [...prevData, userData];
    });
  };
  const [isOn, setIsOn] = useState(false);
  const modalHandler = () => {
    setIsOn(true);
  };
  return (
    <div className="App">
      <Plus onClick={modalHandler} />
      {isOn && <UserInput setIsOn={setIsOn} userInput={userInput} />}
      <div className="output-app">
        <Output userInfo={userInfo} />
      </div>
    </div>
  );
}

export default App;
