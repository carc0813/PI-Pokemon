import axios from 'axios';

export const GET_POKEMONS="GET_POKEMONS";
export const GET_POKEMONS_BY_NAME="GET_POKEMONS_BY_NAME";
export const GET_BY_TYPES = "GET_TYPES";
export const FILTER_BY_TYPES = "FILTER_BY_TYPES";

export function getpokemons(){
         return function(dispatch){
                axios.get('http://localhost:3001/pokemons')
                .then((pokemons)=>{
       
                 dispatch({
                         type:GET_POKEMONS,
                         payload:pokemons.data,
       
                 })
             })
                
         }
        
}

// export function getPokemonsByName(payload){
//   return async function (dispatch){
//     const {data} = await axios.get(`http://localhost:3001/pokemons/?name=${payload}`)
//     dispatch({type:GET_POKEMONS_BY_NAME, payload:data})
//   }

// }

export function getPokemonsByName(payload) {
  return async function (dispatch) {
    try {
      const pokemon = await axios.get(
        "http://localhost:3001/pokemons?name=" + payload
      );
      dispatch({
        type: GET_POKEMONS_BY_NAME,
        payload: pokemon.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getByTypes(){
  return async function(dispatch){
    const {data} = await axios.get('http://localhost:3001/types/')
    console.log(data);
    dispatch({type:GET_BY_TYPES, payload:data})
  }
}



export function filterByTypes(type){
  return function(dispatch){
    dispatch({type:FILTER_BY_TYPES, payload:type})
  }
}

