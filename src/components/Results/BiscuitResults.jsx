import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getBiscuits } from '../../services/firestoreService';

function Biscuit () {
    const [biscuit, setBiscuit] = useState(null);
    let { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            const results = await getBiscuits();
            console.log('RESULTS', results)
// THIS MATCH IS CAUSING THE ISSUE!! GETTING SOMEWHERE!
            const match = results.find(biscuit => biscuit._id === id );
            setBiscuit(match);

            console.log('MATCH:', match);

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
                <p>
                    {biscuit.desc}
                </p>
            </div>
        )
    }
}


export default Biscuit;