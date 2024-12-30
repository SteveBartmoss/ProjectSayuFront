import './App.css';
import './componentes/css/components.css'
import { RouterTablero } from './Routes/Router';
import { RouterMain } from './Routes/routerMain';
import { Paper } from './componentes/Cajas';
import { MainFrame } from './componentes/contenedores/Contenedores';

function App() {
  return (
    <MainFrame>
      <RouterMain />
    </MainFrame>
  );
}

export default App;
