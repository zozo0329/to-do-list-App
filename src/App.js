import { useState } from "react";
import "./App.css";
import Plus from "./Components/UI/Plus";
import UserInput from "./Components/UserInput/UserInput";
function App() {
  const [isOn, setIsOn] = useState(false);
  const modalHandler = () => {
    setIsOn(true);
  };
  return (
    <div className="App">
      <Plus onClick={modalHandler} />
      {isOn && <UserInput setIsOn={setIsOn} />}
    </div>
  );
}

export default App;
