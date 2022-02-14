import { GET_USER, GET_USER_HISTORY } from "../Types";

export default (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    case GET_USER_HISTORY:
      return {
        ...state,
        history: payload,
      }
    default:
      return state;
  }
};