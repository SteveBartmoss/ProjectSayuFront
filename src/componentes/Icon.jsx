import './componentes.css';

export function Icon({icono,color,size}){
    return(
        <span style={{ fontSize: size }} className={`material-icons ${color}`}>{icono}</span>
    )
}