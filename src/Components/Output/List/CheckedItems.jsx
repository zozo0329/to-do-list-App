import "./CheckedItems.css";
const CheckedItems = ({ userData }) => {
  console.log(userData, "USERDATA");
  return (
    <div className="CheckedItems">
      <h1>Checked Items</h1>
      <ul>
        {userData.map((userData) => {
          return <li key={userData.id}>{userData.userInput}</li>;
        })}
      </ul>
    </div>
  );
};

export default CheckedItems;
