import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';

import {getBiscuits} from '../../services/firestoreService';

function SearchBar() {
    const [biscuits, setBiscuits] = useState([]);
    const [results, setResults] = useState([]);
    const searchInput = createRef();

    const filterResults = () => {
        const searchTerm = searchInput.current.value;
        const biscuitResults = biscuits.filter(biscuit => biscuit.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setResults([biscuitResults]);
        console.log(biscuitResults);
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
    }, [])

    return (
        <div>
            <input 
                type="text"
                placeholder="Search Biscuits"
                ref={searchInput}
                onChange={filterResults}
            />
            <div>
                <ul>
                    {
                        biscuits.map(biscuit => (
                            <li key={biscuit._id}>
                                {biscuit.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )

}

export default SearchBar;