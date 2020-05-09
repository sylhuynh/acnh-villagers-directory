import React from "react";

function SearchBar(props) {
    return (
        <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label form="inputSearchTerm" className="sr-only">Search Term</label>
          <input type="searchEm" className="form-control" id="inputSearch" placeholder="Search" value= {props.search} onChange= {props.handleInputChange}>
              </input>
        </div>
      </form>
    );
}

export default SearchBar;