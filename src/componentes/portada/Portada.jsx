import React from "react";
import { DivCol, DivRow } from "../contenedores";

export function Portada({backgroundImage, imgPerfil, title, text}) {
    return (
        <>
        <style>
            {
                `.img-portada{
                    background: url(${backgroundImage}) no-repeat center center/cover;
                }`
            }
        </style>
        <section>
            <DivRow>
                <div>
                    <img alt="imgPerfil" className="img-portada" src={imgPerfil} />
                </div>
                <DivCol>
                    <h1 className="title-portada">{title}</h1>
                    <p className="text-portada">{text}</p>
                </DivCol>
            </DivRow>
        </section>
        </>
        
    )
}