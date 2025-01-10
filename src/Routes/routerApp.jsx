import { Route, Routes } from "react-router-dom";
import { Tablero } from "../pages/tablero";

import { DivFull } from "../componentes/contenedores/Contenedores";
import { MenuVertical } from "../componentes/menuVertical/MenuVertical";
import { TopBar } from "../componentes/topBar/TopBar";

export function RouterApp() {

    const menuElements = [
        {
            title: 'Home',
            route: '/',
            childs: []
        },
        {
            title: 'Tablero',
            route: '',
            childs: [
                {
                    title: 'Panel Principal',
                    route: '/cards/basic',
                },
            ]
        },
        {
            title: 'Tickets',
            route: '',
            childs: [
                {
                    title: 'Panel Principal',
                    route: '/acordeon',
                },
                {
                    title: 'Buttons',
                    route: '/components/buttons',
                },
                
            ]
        },
        {
            title: 'Administracion',
            route: '',
            childs: [
                {
                    title: 'Cuentas',
                    route: '/forms/texfield',
                },
                {
                    title: 'Permisos',
                    route: '/forms/switch',
                },
            ]
        },
    ]

    return (
        <>
            <MenuVertical menuItems={menuElements} />

            <DivFull>
                <TopBar />
                <Routes>
                    <Route path="/" element={<Tablero />} />
                </Routes>
            </DivFull>
        </>
    )
}