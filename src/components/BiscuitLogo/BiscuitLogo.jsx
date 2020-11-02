import React from 'react';

import IsItABiscuitLogo from '../../images/IsItABiscuitLogo.png';
import './BiscuitLogo.css';

function BiscuitLogo () {
    return (
        <div id="home_page">
            <h1>Is It A Biscuit?</h1>
            <h3>Search above to find out!</h3>
            <img src={IsItABiscuitLogo} alt=""/>
            <h5>*No, Jaffa Cakes are not biscuits! <a href="https://www.kerseys.co.uk/jaffa-cakes-cakes-biscuits/#:~:text=During%20the%20court%20battle%20between,recognised%20as%20chocolate%20covered%20cakes.">Click Here</a> to find out why</h5>
        </div>
    )
}

export default BiscuitLogo;