import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import UserContext from "./UserContext";
import axios from "axios";

export default function UserState(props) {
  const initialState = {
    user: {},
    history: [],
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);
  /*optener user */
  const getUser = async () => {
    const url = "https://coding-challenge-api.aerolab.co/user/me";
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
    };
    const res = await axios.get(url, { headers });
    dispatch({
      type: 'GET_USER',
      payload: res.data
    })
  };
  
  const getHistory = async () => {
    const url = "https://coding-challenge-api.aerolab.co/user/history";
    const headers = {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
    };
    const res = await axios.get(url, { headers });
    dispatch({
      type: 'GET_USER_HISTORY',
      payload: res.data
    })
  };

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        history: state.history,
        getUser,
        getHistory
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}