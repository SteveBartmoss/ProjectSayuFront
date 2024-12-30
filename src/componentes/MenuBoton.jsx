import { NavLink } from "react-router-dom";
import { Icon } from "./Icon";

export function MenuBoton({evento,isOpen,label=''}) {
    return (
        <div className="div-menu-btn" onClick={evento}>
            <div className="element-menu-btn">
                <Icon icono="menu" color="md-light" />
            </div>
            {
                isOpen ? <div><NavLink className="menu-item" to='#'>{label}</NavLink></div> : <></>
            }
        </div>
    )
}