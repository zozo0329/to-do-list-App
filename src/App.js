import { useState } from "react";
import "./App.css";
import Plus from "./Components/UI/Plus";
import UserInput from "./Components/UserInput/UserInput";
import Output from "./Components/Output/Output";
function App() {
  const [isOn, setIsOn] = useState(false);
  const modalHandler = () => {
    setIsOn(true);
  };
  return (
    <div className="App">
      <Plus onClick={modalHandler} />
      {isOn && <UserInput setIsOn={setIsOn} />}
      <div className="output-app">
        <Output />
      </div>
    </div>
  );
}

export default App;
