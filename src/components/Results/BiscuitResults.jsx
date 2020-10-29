import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getBiscuits } from '../../services/firestoreService';

import './BiscuitResults.css';

function Biscuit () {
    const [biscuit, setBiscuit] = useState(null);
    let { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
          const results = await getBiscuits();
          const match = results.find(biscuit => biscuit._id === id);
          console.log('match: ', match)
          setBiscuit(match);
        }
        fetchData();
      }, [id])

    if(!biscuit) {
        return(
            <div></div> //THIS FLASHES UP BEFORE THE DATA LOADS, WRITTEN WRONG, THINK ABOUT THIS 

        ) 
    } else {
        return (   
            <div id="result_container">
                <div className="top_container">
                <img src={biscuit.image} alt="biscuit_image"/>
                <div className="sub_top_container">
                <h1 id="biscuit_name">
                    {biscuit.name}
                </h1>
                <div id="sub_tags">
                    <h4>
                        Flavour: {biscuit.flavour}
                    </h4>
                    <h4>
                        Type: {biscuit.type}
                    </h4>
                </div>
                </div>
                </div>
                <p id="description">
                    {biscuit.desc}
                </p>
            </div>
        )
    }
}


export default Biscuit;