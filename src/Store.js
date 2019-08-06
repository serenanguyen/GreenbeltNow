import React, { useState } from "react";

export const LoadingContext = React.createContext();
export const LocationContext = React.createContext();
export const ResultsContext = React.createContext();

const Store = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLocation, setLocation] = useState();
  const [results, setResults] = useState();
  return (
    <LoadingContext.Provider
      value={{ state: isLoading, setState: setIsLoading }}
    >
      <LocationContext.Provider
        value={{ state: selectedLocation, setState: setLocation }}
      >
        <ResultsContext.Provider
          value={{ state: results, setState: setResults }}
        >
          {children}
        </ResultsContext.Provider>
      </LocationContext.Provider>
    </LoadingContext.Provider>
  );
};

export default Store;
