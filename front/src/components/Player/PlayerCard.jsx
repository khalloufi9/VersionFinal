import React from 'react'
import './player.css'
function PlayerCard(props) {
    return (
        <div className="col-md-4 card-player">
            <div className="img-player-container">
                <img src={`http://localhost:5000/${props.player.image}`} alt={props.player.image} />
            </div>
            <h3 className='player-name-card'>{props.player.nameJoueur}</h3>
            <p className='player-poste-card'> {props.player.poste} </p>
        </div>
    )
}

export default PlayerCard