import React from "react";

const SearchBar = ({handleSearchChange}) => {
	return (
		<form className="form-inline d-flex justify-content-center">
			<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={e => handleSearchChange(e)} />
			<button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		</form>
	);
}

export default SearchBar;