import React from 'react'
import sports from './sportData'

function Teams(props) {
    const teams = Object.keys(sports[props.sportSelected])
    return (
        <ul>
            {teams.map((team, i) => 
                <li key={i}>
                    <button value={team} onClick={props.buttonHandler}>
                        {team}
                    </button>
                </li>
            )}
        </ul>
    )
}


export default Teams;