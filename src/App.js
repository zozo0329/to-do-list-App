import { useState } from "react";
import "./App.css";
import Plus from "./Components/UI/Plus";
import UserInput from "./Components/UserInput/UserInput";
import Output from "./Components/Output/Output";
function App() {
  const [isOn, setIsOn] = useState(false);
  const [userData, setUserData] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const addInputHandler = (userData) => {
    setUserInfo((prevData) => {
      return [...prevData, userData];
    });
  };
  const modalHandler = () => {
    setIsOn(true);
  };

  // useEffect(() => {

  // }, [userInfo]);
  return (
    <div className="App">
      <Plus onClick={modalHandler} />
      {isOn && (
        <UserInput setIsOn={setIsOn} addInputHandler={addInputHandler} />
      )}
      <div className="output-app">
        <Output
          userData={userData}
          userInfo={userInfo}
          setUserInfo={setUserInfo}
          setUserData={setUserData}
        />
      </div>
    </div>
  );
}

export default App;
