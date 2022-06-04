import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import { getEquipes } from '../../redux/action/actionEquipe'
import TeamCard from './TeamCard';
import './team.css'
function TeamsList(props) {
    useEffect(() => {
        props.getEquipes()
    }, [])
    console.log('team', props.equipes)
    return (
        <div className="container">
            <h1 className='Teams-List-Title'>Teams List</h1>
            <div className="row">
                {
                    props.equipes.map((team) => (
                        <TeamCard key={team._id} team={team} />
                    ))
                }

            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    equipes: state.equipe.equipes,
});
export default connect(mapStateToProps, { getEquipes })(TeamsList)