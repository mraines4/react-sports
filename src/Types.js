import React from 'react'
import sports from './sportData';

function Types(props) {
    const typeOfSport = Object.keys(sports)
    return (
        <ul>
            {typeOfSport.map((sport, i) => 
                <li key={i}>
                    <button value={sport} onClick={props.buttonHandler}>
                        {sport}
                    </button>
                </li>
            )}
        </ul>
    )
}



export default Types;