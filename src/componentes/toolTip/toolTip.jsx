import { useState } from "react"
import './toolTip.css';

export function ToolTip({children,text}){

    const [show, setShow]=useState(false);

    return(
        <div className="tool-tip-div" onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
            {children}
            {show && <div className="tool-tip">{text}</div>}
        </div>
    )
}