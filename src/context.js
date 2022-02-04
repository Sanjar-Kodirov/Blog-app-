import React, { useState, createContext, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
const Context = createContext();

const ContextProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  const getPhotos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await response.json();
    setPhotos(data);
    setIsloading(false);
  };
  useEffect(() => {
    getPhotos();
  }, []);
  return (
    <Context.Provider
      value={{
        photos,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
