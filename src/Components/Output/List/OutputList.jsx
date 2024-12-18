import "./OutputList.css";
const OutputList = (props) => {
  const filterHandler = (data) => {
    console.log("CLICK", data.userInput);
    props.setUserData((prevData) => {
      return [...prevData, data];
    });

    props.setUserInfo((prevState) => {
      // const filteredItems = prevState.filter((info) => {
      //   if (info.id === data.id) {
      //     return false;
      //   }
      //   return true;
      // });
      // return filteredItems;

      return prevState.filter((userData) => {
        if (userData.id !== data.id) {
          return true;
        }
        return false;
      });
    });
  };

  return (
    <div className="OutputList">
      <h1>List Items</h1>
      <ul>
        {props.userInfo.map((userData) => {
          return (
            <li
              key={userData.id}
              onClick={() => {
                filterHandler(userData);
              }}
            >
              {userData.userInput}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default OutputList;
