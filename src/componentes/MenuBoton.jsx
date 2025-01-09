import { NavLink } from "react-router-dom";
import { Icon } from "./icon/Icon";


export function MenuBoton({evento,isOpen}) {
    return (
        <div className="div-menu-btn" onClick={evento}>
            <div className="element-menu-btn">
                <Icon icono="menu" color="md-light" />
            </div>
            {
                isOpen ? <div><NavLink className="menu-item" to='#'>Ui Steve</NavLink></div> : <></>
            }
        </div>
    )
}