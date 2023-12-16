import React from "react";
import { NavLink } from "react-router-dom";
import { DivNav } from "./Cajas";

export function NavBar() {
    return (
        <DivNav>
            <NavLink to="home">Tablero</NavLink>

            <NavLink to="newtask" >Nueva Tarea</NavLink>
        </DivNav>
    );
}