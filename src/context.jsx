import React, { useContext, useReducer, useEffect } from "react";
import { reducer } from "./reducer";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const initialState = {
    name: "",
    image: "",
  };

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "WEB DEVELOPER",
        image: "./images/Home.svg",
      },
    });
  };

  const updateAboutPage = () => {
    return dispatch({
      type: "ABOUT_UPDATE",
      payload: {
        name: "SULTAN ANSARI",
        image: "./images/About.jpg",
      },
    });
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ ...state, updateHomePage, updateAboutPage }}>
      {children}
    </AppContext.Provider>
  );
};

//global custom hook

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
