import React, { useEffect } from 'react'
import { connect } from "react-redux";
import { getJouers } from '../../redux/action/actionJoueur'
function PalyersList(props) {
    useEffect(() => {
        props.getJouers()
    }, [])
    console.log('joueur', props.joueurs)
    return (
        <div className='container' style={{ marginTop: '30px' }}>
            <h1>Players List</h1>
            <div className="row">
                <div className="col-md-4">
                    <h3>Player</h3>
                </div>
                <div className="col-md-4">
                    <h3>Post</h3>
                </div>
                <div className="col-md-4">
                    <h3>image</h3>
                </div>
            </div>
            {console.log('joueur1', props.joueurs)}
            {

                props.joueurs.map((e) => (
                    <div className="row" style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
                        <div className="col-md-4">
                            <p style={{ fontSize: '20px', fontWeight: '500' }}>{e.nameJoueur}{console.log('nameJoueur', e.nameJoueur)}</p>
                        </div>
                        <div className="col-md-4">
                            <p style={{ fontSize: '20px', fontWeight: '500' }}>{e.poste}</p>
                        </div>
                        <div className="col-md-4">
                            <img src={`http://localhost:5000/${e.image}`} alt={e.name} style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

const mapStateToProps = (state) => ({
    joueurs: state.joueur.joueurs,
});
export default connect(mapStateToProps, { getJouers })(PalyersList)