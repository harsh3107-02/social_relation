import React, { useEffect, createContext, useReducer } from "react";

export const AuthContext = createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case "Login_start":
      return { ...state, isFetching: true };
    case "Login_Sucess":
      return { ...state, isFetching: false, user: action.payload };
    case "Login_Failure":
      return { ...state, isFetching: false, error: action.payload };
    case "FOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          follower: [...state.user.follower, action.payload],
        },
      };
    case "UNFOLLOW":
      return {
        ...state,
        user: {
          ...state.user,
          follower: state.user.follower.filter(
            (following) => following !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
