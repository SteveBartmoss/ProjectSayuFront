import './App.css';
import './componentes/css/components.css'
import { RouterMain } from './Routes/routerMain';
import { MainFrame } from './componentes/contenedores/Contenedores';

function App() {
  return (
    <MainFrame>
      <RouterMain />
    </MainFrame>
  );
}

export default App;
