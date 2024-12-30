import { Route, Routes } from "react-router-dom";
import { Tablero } from "../pages/tablero";

import { DivApp, DivFull } from "../componentes/contenedores/Contenedores";
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
            title: 'Cards',
            route: '',
            childs: [
                {
                    title: 'Card Basic',
                    route: '/cards/basic',
                },
            ]
        },
        {
            title: 'Components',
            route: '',
            childs: [
                {
                    title: 'Expansion Panel',
                    route: '/acordeon',
                },
                {
                    title: 'Buttons',
                    route: '/components/buttons',
                },
                {
                    title: 'Tabs',
                    route: '/components/tabs',
                },
                {
                    title: 'Modales',
                    route: '/components/modales',
                },
                {
                    title: 'Iconos',
                    route: '/components/icons',
                },
                {
                    title: 'Loader',
                    route: '/components/loader',
                },
                {
                    title: 'Tool Tip',
                    route: '/components/tooltip',
                },
                {
                    title: 'Chip',
                    route: '/components/chip',
                },
                {
                    title: 'SnackBar',
                    route: '/components/snackbar',
                },
                {
                    title: 'Menu',
                    route: '/components/menu',
                },
                {
                    title: 'Carrusel',
                    route: '/components/carrusel',
                },
                {
                    title: 'Progress Bar',
                    route: '/components/progressbar',
                }
            ]
        },
        {
            title: 'Forms',
            route: '',
            childs: [
                {
                    title: 'Texfield',
                    route: '/forms/texfield',
                },
                {
                    title: 'Switch',
                    route: '/forms/switch',
                },
                {
                    title: 'Slider',
                    route: '/forms/slider',
                },
                {
                    title: 'Text Long',
                    route: '/forms/textlong',
                },
                {
                    title: 'Select Box',
                    route: '/forms/selectbox',
                }
            ]
        },
        {
            title: 'Tables',
            route: '',
            childs: [
                {
                    title: 'Table',
                    route: '/tables/table',
                },
            ]
        },
        {
            title: 'Pages',
            route: '',
            childs: [
                {
                    title: 'Login',
                    route: '/login',
                },
                {
                    title: 'BadRoute',
                    route: '/badroute',
                }
            ]
        }
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