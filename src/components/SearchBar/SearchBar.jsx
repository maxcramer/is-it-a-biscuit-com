import React, { useState, useEffect, createRef } from 'react';


function SearchBar() {
    const [biscuit, setBiscuit] = useState([]);
    const searchInput = createRef();

    const filterResults = () => {
        const searchTerm = searchInput.current.value;
        // const biscuit = 
    }

    useEffect(() => {

    })

    return (
        <div>
            <input 
                type="text"
                placeholder="Search Biscuits"
                ref={searchInput}
                onChange={filterResults}
            />
        </div>
    )

}

export default SearchBar;