import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';

import { getBiscuits } from '../../services/firestoreService';

import './SearchBar.css';

function SearchBar() {
    const [biscuits, setBiscuits] = useState([]);
    const [results, setResults] = useState([]);
    const searchInput = createRef();

    const filterResults = () => {
        const searchTerm = searchInput.current.value;
        const biscuitResults = biscuits.filter(biscuit => biscuit.name.toLowerCase().includes(searchTerm.toLowerCase()));
        console.log('this is the biscuit results', biscuitResults);
        setResults([...biscuitResults]);
        console.log(results);
    }

    const onResultClick = () => {
        console.log("onResultClick running");
        setResults([]);
        searchInput.current.value = '';
    }

    useEffect(() => {

        const fetchBiscuits = async () => {
            const biscuitResponse = await getBiscuits();
            setBiscuits(biscuitResponse);
        }

        const loadData = async () => {
            await Promise.all([fetchBiscuits()]);
            setResults([])
        }
        loadData();
        setResults([]);
    }, []);
    return (
        <div>
        <div id="search_bar_container">
            <input 
                id="search_bar"
                type="text"
                placeholder="Search Biscuits..."
                ref={searchInput}
                onChange={filterResults}
            />
            </div>
            <div id="search_list_container">
                <ul id="search_list">
                    {results.map(result => (
                            <li id="result_width" key={result._id}>
                                <Link 
                                id="result_item"
                                onClick={onResultClick} 
                                to={`/biscuitResults/${result._id}`}
                                >
                                    <img id="image" src={result.image} alt=""/>
                                    <div id="results_info">
                                        <p className="results_info_item">Name: {result.name} </p>
                                        <p className="results_info_item">Flavour: {result.flavour}</p>
                                        <p className="results_info_item">Type: {result.type}</p>
                                    </div>
                                </Link>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </div>
    );

}

export default SearchBar;