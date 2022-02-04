import React, { useState, createContext, useEffect } from 'react';
const Context = createContext();
const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const getPhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    setPhotos(data);
  };
  useEffect(() => {
    getPhotos();
  }, []);
  console.log(photos);
  const name = 'TEst one';
  return (
    <Context.Provider
      value={{
        name,
        photos,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
