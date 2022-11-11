import { GET_USER, GET_USER_HISTORY, POST_POINTS, POST_REDEEM } from "../Types";

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
    case POST_POINTS:
      return {
        ...state,
        history: payload,
      }
    case POST_REDEEM:
      return {
        ...state,
        redeem: payload,
      }
    default:
      return state;
  }
};