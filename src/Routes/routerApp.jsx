import { Route, Routes } from "react-router-dom";
import { Tablero } from "../pages/tablero";

import { DivFull } from "../componentes/contenedores/Contenedores";
import { MenuVertical } from "../componentes/menuVertical/MenuVertical";
import { TopBar } from "../componentes/topBar/TopBar";
import { TaskConfig } from "../pages/task/taskConfig/TaskConfig";
import { TaskDashboard } from "../pages/task/taskDashboad/TaskDashboard";

export function RouterApp() {

    const menuElements = [
        {
            title: 'Home',
            route: '/tablero',
            childs: []
        },
        {
            title: 'Tablero',
            route: '',
            childs: [
                {
                    title: 'Dashboard',
                    route: '/tareas/dashboard',
                },
                {
                    title: 'Tareas',
                    route: '/tareas/config',
                }
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
                    <Route path="/tareas/dashboard" element={<TaskDashboard />} />
                    <Route path="/tablero" element={<Tablero />} />
                    <Route path="/tareas/config" element={<TaskConfig />} />
                </Routes>
            </DivFull>
        </>
    )
}