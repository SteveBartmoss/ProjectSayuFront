import logo from './logo.svg';
import './App.css';
import { DivHead, DivLista, DivTablero } from './componentes/Cajas';

function App() {
  return (
    <div className="App">
      <DivHead>
        <h1>Tablero</h1>
      </DivHead>
      <DivTablero>
        <DivLista>
          <h1>Tareas pendientes</h1>
        </DivLista>
        <DivLista>
          <h1>Tareas completadas</h1>
        </DivLista>
      </DivTablero>
    </div>
  );
}

export default App;
