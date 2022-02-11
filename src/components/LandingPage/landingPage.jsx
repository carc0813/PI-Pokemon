import React from "react";
//import { NavLink } from 'react-router-dom';
import danceLange from "../Img/danceLange.gif";
import "./Style.css";
import { Link } from 'react-router-dom'

function MyButton() {
  return(
     <div className="center">
        <Link to="/pokemons">
        <button className="buton">Enter</button>
        </Link>
         
            
     </div>
    
  )
}

export default function MyApp() {
  return (
    <div>
      <img className="avatar" src={danceLange} alt="picachu" />
      <MyButton />
    </div>
  );
}
