import { NavLink } from "react-router-dom";
import { useState } from "react";
import './MenuVertical.css'
import { MenuList } from "../MenuList";
import { MenuBoton } from "../MenuBoton";

export function MenuVertical({menuItems}) {

    const [abrir, setAbrir] = useState(true)

    const closeMenu = () => {
        setAbrir(!abrir)
    }

    return (
        <div className={abrir ? 'menu-vertical' : 'menu-vertical-close'}>
            <MenuBoton evento={closeMenu} isOpen={abrir} label="Project Sayu" />
            <div className={abrir ? 'nav-bar' : 'nav-bar-close'}>
                {
                    menuItems.map(item =>
                        item.route != '' ? <NavLink key={item.title} className="menu-item" to={item.route}>{item.title}</NavLink> : item.childs.length >0 ? <MenuList key={item.title} title={item.title} elements={item.childs} /> : <></>
                    )
                }
            </div>
        </div>
    );
}