import React from "react";
import "./assets/global-styles/style.css";
import UserState from "./context/user/UserState";
/*components */
import Home from "./pages/Home";

function App() {
  return (
    <UserState>
      <Home />
    </UserState>
  );
}

export default App;
