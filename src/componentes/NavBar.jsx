import React from "react";
import { NavLink } from "react-router-dom";
import { DivNav } from "./Cajas";

export function NavBar() {
    return (
        <DivNav>
            
            <li>
                <NavLink to="home" className="nav-item" >Tablero</NavLink>
            </li>

            <li>
                <NavLink to="newtask" className="nav-item" >Nueva Tarea</NavLink>
            </li>

        </DivNav>
    );
}