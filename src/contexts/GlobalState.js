import React, { useState } from "react";
import { GlobalContext } from "../GlobalStateContext/GlobalStateContext";

const GlobalState = (props) => {
    const [isLoading, setIsLoading] = useState(true);

return (
    <GlobalContext.Provider value={{isLoading, setIsLoading}}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;