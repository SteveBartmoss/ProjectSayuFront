import './App.css';
import { RouterTablero } from './Routes/Router';
import { DivHead, DivLista, DivTablero, Paper } from './componentes/Cajas';
import { Footer } from './componentes/Footer';
import { NavBar } from './componentes/NavBar';

function App() {
  return (
    <Paper>
      <RouterTablero />
    </Paper>
  );
}

export default App;
