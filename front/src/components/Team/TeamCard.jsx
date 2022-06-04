
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './team.css'
function TeamCard(props) {
    const navigate = useNavigate()
    const ViewTeam = (e) => {
        navigate(`/team/${e}`)
    }
    return (
        <div className="col-md-4 card-team" key={props.team._id}>
            <div className="img-team">
                <img src={`http://localhost:5000/${props.team.image}`} alt={props.team.image} className='team-image' />
            </div>
            <h2 className='team-name'>{props.team.nameTeam}</h2>
            <button className='card-team-btn' onClick={() => ViewTeam(props.team._id)}>View</button>

        </div>
    )
}

export default TeamCard