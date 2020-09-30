import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getBiscuits } from '../../services/firestoreService';

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
            <div></div>

        ) 
    } else {
        return (   
            <div>
                <h1>
                    {biscuit.name}
                </h1>
                <h3>
                    {biscuit.flavour}
                </h3>
                <h3>
                    {biscuit.type}
                </h3>
                <p>
                    {biscuit.desc}
                </p>
            </div>
        )
    }
}


export default Biscuit;