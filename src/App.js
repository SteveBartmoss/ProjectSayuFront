import './App.css';
import { RouterTablero } from './Routes/Router';
import { DivHead, DivLista, DivTablero } from './componentes/Cajas';
import { Footer } from './componentes/Footer';
import { NavBar } from './componentes/NavBar';

function App() {
  return (
    <div className="App">
      <RouterTablero />
    </div>
  );
}

export default App;
