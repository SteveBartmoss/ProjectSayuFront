import { useState } from "react";
import { Icon } from "./Icon";
import { MenuList } from "./MenuList";
import { NavLink } from "react-router-dom";


export function MenuMobil({menuItems}) {

    const [abrir, setAbrir] = useState(false)

    const onHandleClick=()=>{
        setAbrir(!abrir)
    }

    return (
        <div className="menu-mobil">
            <div onClick={onHandleClick}>
                <Icon icono="menu" color="md-light" />
            </div>
            <div className={abrir ? 'menu-mobil-open' : 'menu-mobil-close'} >
                {
                    menuItems.map(item =>
                        item.route !=='' ? <NavLink className="menu-item" to={item.route}>{item.title}</NavLink> : item.childs.length >0 ? <MenuList title={item.title} elements={item.childs} /> : <></>
                    )
                }
            </div>
        </div>
    )
}