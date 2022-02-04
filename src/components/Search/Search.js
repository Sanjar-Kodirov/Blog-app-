import Reactk, { useState, useContext, useEffect } from 'react';
import { Context } from '../../context';
const Search = () => {
  const { photos, setPhotos, search, setSearch } = useContext(Context);

  return (
    <div className='search-cont container'>
      <input
        onChange={(e) => setSearch(e.target.value)}
        class='input primary'
        placeholder='search by name'
      />
    </div>
  );
};

export default Search;
