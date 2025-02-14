import './TopBar.css';
import { FaHome, FaTasks, FaUser, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export function TopBar() {
    return (
        <div className="top-bar-background">
            <nav className="top-bar-nav">
                <Link to="/" className="nav-item">
                    <FaHome className="nav-icon" />
                    <span>Inicio</span>
                </Link>
                
                <Link to="/tareas" className="nav-item">
                    <FaTasks className="nav-icon" />
                    <span>Tareas</span>
                </Link>
                
                <Link to="/perfil" className="nav-item">
                    <FaUser className="nav-icon" />
                    <span>Perfil</span>
                </Link>
                
                <Link to="/configuracion" className="nav-item">
                    <FaCog className="nav-icon" />
                    <span>Configuración</span>
                </Link>
            </nav>
        </div>
    );
}