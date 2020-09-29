import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getBiscuits } from '../../services/firestoreService';

function Biscuit () {
    const [biscuit, setBiscuit] = useState(null);
    let { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            const results = await getBiscuits();
            console.log('RESULTS', results)
            const match = results.find(biscuit => biscuit._id === id );
            setBiscuit(match);
            console.log('MATCH:', match);

        }
        fetchData();
    }, [id])

    if(!biscuit) {
        return(
            <div>No Biscuit Found</div>

        ) 
    } else {
        return (   
            <div>
                {biscuit.name}
                {biscuit.desc}
            </div>
        )
    }
}


export default Biscuit;