import React from "react";
import "./assets/global-styles/style.css";
import UserState from "./context/user/UserState";
import { BrowserRouter as Router } from "react-router-dom";
/*components */
import PrincipalPage from "./pages/PrincipalPage";

function App() {
  return (
    <UserState>
      <Router>
        <PrincipalPage />
      </Router>
    </UserState>
  );
}

export default App;
