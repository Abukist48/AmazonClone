

import React, { createContext, useContext, useReducer } from "react";

// Create a new context for the state
export const StateContext = createContext();

// Create a provider component to wrap your app and provide the state
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Create a custom hook to access the state
export const useStateValue = () => useContext(StateContext);
