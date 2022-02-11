import { GET_POKEMONS } from "../actions";
import {GET_POKEMONS_BY_NAME} from "../actions";
import { GET_BY_TYPES } from "../actions";
import {FILTER_BY_TYPES} from "../actions";


const initialState = {
	pokemons: [],
	allPokemons: [],
	detail: [],
	types: [],
	backUpPokemon:[],
};

 function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_POKEMONS:
			return {
				...state,
				backUpPokemon:action.payload,
				allPokemons: action.payload,
			}
			case GET_POKEMONS_BY_NAME:
     return {
	      ...state,
	     pokemons: action.payload,
       }
       case GET_BY_TYPES:
          return{
	       ...state,
	       types:action.payload,
           }
		  case FILTER_BY_TYPES:
				{
	    const poke = state.backUpPokemon.filter((elemento)=>{
			return elemento.types.includes(action.payload )
	        })
	return {
			...state,
			pokemons:[],
			allPokemons:poke
    	}
        }
      default:
        return state
}

}

export default rootReducer;