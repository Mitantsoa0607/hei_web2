// import React from 'react'

const SearchBar = () => {
  return (
    <form action="">
        <label htmlFor="search" style={{fontFamily : "arial"}}>Rechercher : </label>
        <input type="search" name="search" id="search" placeholder="Rechercher" style={{padding : "8px 50px",borderRadius : "10px", border: "none",boxShadow: "2px 2px 2px grey"}}/>
    </form>
  )
}

export default SearchBar