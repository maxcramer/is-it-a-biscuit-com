import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import BiscuitResults from './Results/BiscuitResults';

function Home() {
    return(
        <div>
            <SearchBar />
            <BiscuitResults />
        </div>
    )
}

export default Home;