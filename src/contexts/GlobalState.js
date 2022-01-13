import React, { useState } from "react";
import { GlobalContext } from "./GlobalStateContext";

const GlobalState = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    const states = {
      isLoading
    }

    const setters = {
      setIsLoading
    }

return (
    <GlobalContext.Provider value={{states, setters}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;