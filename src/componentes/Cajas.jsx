import React from "react";

export function DivHead({children}){
    return(
        <div className="div-head">
            {children}
        </div>
    );
}

export function DivTablero({children}){
    return(
        <div className="div-tablero">
            {children}
        </div>
    );
}

export function DivLista({children}){
    return(
        <div className="div-lista">
            {children}
        </div>
    );
}

export function DivCard({children}){
    return(
        <div className="div-card">
            {children}
        </div>
    );
}