import React from 'react';
import sports from './sportData';

function Players(props) {
    const players = sports[props.sportSelected][props.teamSelected]
    return (
        <ul>
            {players.map((player, i) => 
                <li key={i}>
                    {player}
                </li>
            )}
        </ul>
    )
}

export default Players;