import axios from "axios";

//ACTION TYPES
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const DATA_STORAGE = "DATA_STORAGE";
export const DATA_FAILURE = "DATA_FAILURE";

//Action Creators
const removeFromFavourite = () => {
  return {
    type: REMOVE_FROM_FAVOURITE,
  };
};

const addToFavourite = () => {
  return {
    type: ADD_TO_FAVOURITE,
  };
};

const dataFetch = (data) => {
  return {
    type: DATA_STORAGE,
    payload: data,
  };
};

const dataFetchFailure = (error) => {
  return {
    type: DATA_STORAGE,
    payload: error,
  };
};

//Thunk Action Creator
export const thunkFetch = (job) => {
  return (dispatch) => {
    dispatch(dataFetch());
    axios
      .get("https://strive-benchmark.herokuapp.com/api/jobs?company=" + { job })
      .then((response) => {
        const data = response.data;
        dispatch(dataFetch(data));
      })
      .catch((error) => {
        dispatch(dataFetchFailure(error.message));
      });
  };
};
