import React, { useState } from "react";

export const LoadingContext = React.createContext();
export const ResultsContext = React.createContext();

const Store = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState();
  return (
    <LoadingContext.Provider value={{state:isLoading, setState:setIsLoading}}>
      <ResultsContext.Provider value={{state:results, setState:setResults}}>
        {children}
      </ResultsContext.Provider>
    </LoadingContext.Provider>
  );
};

export default Store;
