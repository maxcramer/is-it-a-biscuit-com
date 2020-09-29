import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getBiscuits } from '../../services/firestoreService';

function Biscuit () {
    const [biscuit, setBiscuit] = useState(null);
    let { id } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            const results = await getBiscuits();
            const match = results.find(biscuit => biscuit._id === id );
            console.log(match);
            setBiscuit(match);
        }
        fetchData()
    }, [id])
}


export default Biscuit;