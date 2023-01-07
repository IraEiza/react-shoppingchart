import React, { useState } from 'react';
import '../assets/css/SearchBar.css'

const SearchBar = ({searchFilter}) => {

  const [search, setSearch] = useState('')

  const handleSearch = (input) => {
    setSearch(input)
    searchFilter(input)
  }

  return (
    <div className="input-group">
      <div className="form-outline">
        <input 
          type="search" 
          id="form1" 
          className="form-control" 
          placeholder="Search product"
          value={search}
          onChange={event => {handleSearch(event.target.value)}}
          />
        <label className="form-label" htmlFor="form1">Search</label>
      </div>
    </div>
  );
}

export default SearchBar;