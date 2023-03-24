import { useReducer, useEffect } from "react";
import axios from "axios";

const actions = {
  MAKE_REQUEST: "make-a-request",
  GET_DATA: 'get-data',
  ERROR : "error"
}

const intitalState = {
  data: null,
  isLoading: false,
  error: null
}



function reducer(state, action){
  switch(action.type){
    case actions.MAKE_REQUEST:
      return {
        data: null,
        isLoading: true, 
        error: null
      }
    case actions.GET_DATA:
      return {
        data: action.payload,
        isLoading: false, 
        error: null
      }
    case actions.ERROR:
      return {
        data: null,
        isLoading: false, 
        error: action.payload
      }
    default:
      return state
  }
}

function useFetchApi(url) { 

  const [state, dispatch] = useReducer(reducer, intitalState);

  useEffect(() =>{
      dispatch({type: actions.MAKE_REQUEST})
      const fetchData = async() =>{
        try{
           const response = await axios.get(url);
           dispatch({type: actions.GET_DATA, payload: response.data})
        }catch(error){
          dispatch({type: actions.ERROR, payload: error.message})
        }
      }
      fetchData();
  },[url]);
  return state
}

export default useFetchApi