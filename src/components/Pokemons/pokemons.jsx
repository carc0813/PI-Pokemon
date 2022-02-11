import { getpokemons,getByTypes} from "../../actions/index"
import {useDispatch, useSelector} from 'react-redux'
import { useEffect ,useState} from "react";
import Paged from "../Paged/paged";
import Cards from "../Cards/cards";
import img from "../Img/pokemonsquirtle.gif";
import NavBar from "../NavBar/navbar";

export default function Pokemons(){
    const poquemoncitos = useSelector((state)=>state.allPokemons)
    const pokemons = useSelector((state)=>state.pokemons)
    const types = useSelector((state)=>state.types)
    const dispatch = useDispatch();


    const [currentPage, setCurrentPage] = useState(1);
    const [pokePerPage] = useState(12);
    const lastPoque = currentPage * pokePerPage;
    const firstPoque = lastPoque - pokePerPage;
    const pokeGap = poquemoncitos.slice(firstPoque, lastPoque);
    const paged = (number) => {
        setCurrentPage(number)
    }


    useEffect(()=>{//ejecuta algo mientras se renderiza la pagina 
        dispatch(getpokemons())
        dispatch(getByTypes())
    },[dispatch]) 
  
    return ( 
        <div>
        <NavBar
           types={types}
           setCurrentPage={setCurrentPage}
           
       /> 
       <Paged
           poquemoncitos={poquemoncitos.length}
           pokePerPage={pokePerPage}
           paged={paged}
       />
       <div>
           {
           pokemons.length? pokemons.map((pokemon)=>{
               console.log(pokemons)
               return (
                   <>
                       <Cards
                           key={pokemon.id}
                           name={pokemon.name}
                           types={pokemon.types}
                           img={pokemon.img}
                       />
                   </>
               )
           }):pokeGap.length ? pokeGap.map((pokemon) => {
               return (
                   <>
                       <Cards
                           key={pokemon.id}
                           name={pokemon.name}
                           types={pokemon.types}
                           img={pokemon.img}
                       />
                   </>
               )
           }):<p><img className="loiding" src={img} /> </p> }
            </div>
        </div>
        
    )
}