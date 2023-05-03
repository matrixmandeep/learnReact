import "./App.css";
import { userData } from "./utils/userData";
import AddUserCard from "./components/AddUserCard";
import { useState } from "react";
import UserList from "./components/UserList";
function App() {
  const [userInfo, setuserInfo] = useState(userData);
  function addUserCard(userCard) {
    setuserInfo([...userInfo, { ...userCard, id: userInfo.length + 1 }]);
    console.log(userInfo)
  }
  return (
    <>

      <div>
        <AddUserCard addCard={addUserCard}></AddUserCard>
        <div className="userCards">
          <UserList userInfo={userInfo}></UserList>
        </div>
      </div>
    </>
  );
}

export default App;
