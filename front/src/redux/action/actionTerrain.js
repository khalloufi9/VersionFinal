import React from 'react'
import {GET_TERRAINS,GET_TERRAIN} from './actiontype'
import axios from "axios";

export const getTerrains = () => async (dispatch) => {
    await axios
      .get("http://localhost:5000/terrain/")
      .then((res) => dispatch({ type: GET_TERRAINS, payload: res.data }))
      .catch((err) => console.log(err));
  };

  export const getTerrain= (id) => async (dispatch) => {
    await axios
      .get(`http://localhost:5000/terrain/${id}`)
      .then((res) => dispatch({ type: GET_TERRAIN, payload: res.data }))
      .catch((err) => console.log(err));
  };
  
  export const AddTerrain = (newTerrain) => (dispatch) => {
    axios
      .post("http://localhost:5000/terrain/add", newTerrain)
  
      .then(
        (res) => dispatch({ type: GET_TERRAINS, payload: res.data }),
      )
      .catch((err) => console.log(err));
  };

  export const deleteTerrain = (id) => (dispatch) => {
    axios
      .delete(`http://localhost:5000/terrain/${id}`)
      .then((res) => dispatch(getTerrains()))
      .catch((err) => console.log(err));
  };
  
  export const updateTerrain = (id, updatedterrain) => (dispatch) => {
    axios
      .put(`http://localhost:5000/equipe/${id}`, updatedterrain)
      .then((res) => dispatch(getTerrains(), { payload: res.data }))
      .catch((err) => console.log(err));
  };