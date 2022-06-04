import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getEquipe } from "../../redux/action/actionEquipe"
import { findJoueur } from "../../redux/action/actionJoueur"
import "./team.css"
import PlayerCard from "../Player/PlayerCard";
function TeamDetails(props) {
    let { id } = useParams();
    useEffect(() => {
        props.getEquipe(id)
        props.findJoueur(id)
    }, [])
    console.log('id', id)
    console.log('equipe', props.equipe)
    console.log('joueur', props.joueurs)
    return (
        <div className="container">
            <div className="row" style={{ justifyContent: 'center', marginTop: '30px' }}>
                <h1 className="Teams-List-Title2">Team Name : {props.equipe.nameTeam}</h1>
                <img img src={`http://localhost:5000/${props.equipe.image}`} alt={props.equipe.image} className="img-team-details" />
                <h2 className="Teams-List-Title2">Secteur : {props.equipe.secteur}</h2>
            </div>
            <div className="row" style={{ justifyContent: 'center', marginTop: '30px' }}>
                <h1 className="Teams-List-Title">Players List</h1>
                {
                    props.joueurs.map((player) => (
                        <PlayerCard player={player} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    equipe: state.equipe.equipe,
    joueurs: state.joueur.joueurs
});
export default connect(mapStateToProps, {
    getEquipe, findJoueur
})(TeamDetails)