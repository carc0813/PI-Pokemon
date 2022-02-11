 import { useState } from "react";
import { useDispatch } from "react-redux";
import {getPokemonsByName, filterByTypes} from "../../actions/index";
//select para orden(asc,desc), boton filtro por tipo, boton para crear(form)
export default function NavBar({ setCurrentPage, types}){
   
    const dispatch = useDispatch();
    const [input, setInput] = useState('')

    function handleInputChange(e){
        e.preventDefault();
		setInput(e.target.value);
    }
    const searcher =async (e)=>{
        e.preventDefault();
        dispatch(getPokemonsByName(input));
        setCurrentPage(1)
        setInput('')
    } 
    const handleSelectChange = async (e)=>{
        e.preventDefault();
        dispatch(filterByTypes(e.target.value))//falta funcion filter de las acciones 
    }
    return (
        <div>
            <form onSubmit={(e)=>searcher(e)}>
                <input value={input} 
                name="search"
                type="text"
                onChange={(e)=>handleInputChange(e)} 
                />
                <button type="submit">search</button>
                <select name="type" onChange={handleSelectChange}>
                    <option value='all'>All-types</option>
					{types&&types.map((type) => {
						return (
							<option	
                                key={type.id}
                                value={type.name}>
                                {type.name}
                            </option>
						);
					})}
    
                </select>
            </form>
        </div>
    )
}