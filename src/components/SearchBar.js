import React from "react";

function SearchBar() {
    return (
        <form className="form-inline">
        <div className="form-group mx-sm-3 mb-2">
          <label for="inputSearchTerm" className="sr-only">Searh Term</label>
          <input type="searchEm" className="form-control" id="inputSearch" placeholder="Search">
              </input>
        </div>
        <button type="submit" className="btn btn-secondary mb-2">Search</button>
      </form>
    );
}

export default SearchBar