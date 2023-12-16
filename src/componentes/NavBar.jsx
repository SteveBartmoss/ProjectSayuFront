import React from "react";
import { NavLink } from "react-router-dom";

export function NavBar(){
    return(
        <div>
            
            <NavLink to="home">Tablero</NavLink>

            <NavLink to="newtask" >Nueva Tarea</NavLink>

        </div>
    );
}