import React from 'react'
import {GET_MATCHES,GET_MATCH_BYID} from './actiontype'
import axios from "axios";

export const getMatches = () => async (dispatch) => {
    await axios
      .get("http://localhost:5000/match/")
      .then((res) => dispatch({ type: GET_MATCHES, payload: res.data }))
      .catch((err) => console.log(err));
  };

  export const getMatchbyId = (id) => async (dispatch) => {
    await axios
      .get(`http://localhost:5000/match/${id}`)
      .then((res) => dispatch({ type: GET_MATCH_BYID, payload: res.data }))
      .catch((err) => console.log(err));
  };
  
  export const AddMatche = (newMatch) => (dispatch) => {
    axios
      .post("http://localhost:5000/match/add", newMatch)
  
      .then(
        (res) => dispatch({ type: GET_MATCHES, payload: res.data }),
      )
      .catch((err) => console.log(err));
  };

  export const deleteMatch = (id) => (dispatch) => {
    axios
      .delete(`http://localhost:5000/match/${id}`)
      .then((res) => dispatch(getMatches()))
      .catch((err) => console.log(err));
  };
  
  export const updateMatch = (id, updatedmatch) => (dispatch) => {
    axios
      .put(`http://localhost:5000/match/${id}`, updatedmatch)
      .then((res) => dispatch(getMatches(), { payload: res.data }))
      .catch((err) => console.log(err));
  };