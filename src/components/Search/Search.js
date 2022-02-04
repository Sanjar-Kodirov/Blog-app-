import Reactk, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context';
const Search = () => {
  const { photos, setPhotos, search, setSearch } = useContext(Context);

  return (
    <div>
      <input onChange={(e) => setSearch(e.target.value)} placeholder='search by name' />
    </div>
  );
};

export default Search;
