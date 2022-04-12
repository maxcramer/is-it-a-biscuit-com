import React, { useState, useEffect, createRef } from 'react';
import { Link } from 'react-router-dom';

import { getBiscuits } from '../../services/firestoreService';

import IsItABiscuitLogo from '../../images/IsItABiscuitLogo.png';

import './SearchBar.css';

function SearchBar() {
    const [biscuits, setBiscuits] = useState([]);
    const [results, setResults] = useState([]);
    const searchInput = createRef();
    // let noBiscuit = useState();
    let noBiscuit = null;


    const filterResults = () => {
        const searchTerm = searchInput.current.value;
        const biscuitResults = biscuits.filter(biscuit => biscuit.name.toLowerCase().includes(searchTerm.toLowerCase()));
        // console.log('this is the biscuit results', biscuitResults);
        setResults([...biscuitResults]);
        // console.log(results);
        // console.log(searchTerm.length) 
        if(searchTerm.length >= 1) {
            // console.log("done it")
            checkResults();
        }
        // if((searchTerm.length < 1) && (biscuitResults.length < 1)) {  
        //     noBiscuit = <div id="noBiscuit"><h2>This is not a biscuit!</h2></div>
        //     console.log("if statement running", searchTerm.length);
        // }
    }

    const onResultClick = () => {
        // console.log("onResultClick running");
        setResults([]);
        searchInput.current.value = '';
        
    }

    // noBiscuit = null; Don't think I need this line of code 

    // const checkResults = () => {
    //     const searchTerm = searchInput.current.value.length;
    //      if(searchTerm > 0) {   
    //         console.log("if statement running", searchTerm);
    //         noBiscuit = <div id="noBiscuit"><h2>This is not a biscuit!</h2></div>
    //     }
    // }

   

    // if(!results) 
    //     noResults =  <div>No Result</div>;
    //     console.log('there are no results')
    // }

    const checkResults = () => {
        if(results.length < 1) {
            noBiscuit = <div><p>This aint no biccy </p></div>
            // console.log("results length", results.length)
        }
        return (
            noBiscuit
        )
    }

    // noBiscuit = <div><p>This aint no biccy </p></div>

   
    // ERROR: Cannot read property 'value' of null, fucking why?
    // if(searchInput.current.length > 1) {
    //     console.log("IF INPUT VALUE GREATER THAN 1")
    // }

    useEffect(() => { // THIS IS A REACT HOOK

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

    // console.log(biscuits);

    return (
        <div>
        <div id="search_bar_container">
            <a href="/">
                <img src={IsItABiscuitLogo} alt=""/>
            </a>
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
                {noBiscuit}
                    {results.map(result => (
                            <li id="result_width" key={result._id}>
                                <Link 
                                id="result_item"
                                onClick={onResultClick} 
                                to={`/biscuitResults/${result._id}`}
                                >
                                    <div id="results_info">
                                        <h2 className="results_info_item">{result.name} </h2>
                                        <img id="image" src={result.image} alt=""/>

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