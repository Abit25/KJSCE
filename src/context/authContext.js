import React from "react";
import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_user":
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

const addUser = dispatch => {
  return user => {
    dispatch(user);
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { addUser },
  {}
);
