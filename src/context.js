import React, { useState, createContext } from 'react';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const name = 'TEst one';
  return (
    <Context.Provider
      value={{
        name,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
