import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Institucional from './pages/Institucional';
import Noticias from './pages/Noticias';
import Investigacion from './pages/Investigacion';
import Diagnosticos from './pages/Diagnosticos';
import Contacto from './pages/Contacto';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/Home' element = {<Home />} />
            <Route path = '/Institucional' element = {<Institucional />} />
            <Route path = '/Noticias' element = {<Noticias />} />
            <Route path = '/Investigacion' element = {<Investigacion />} />
            <Route path = '/Diagnosticos' element = {<Diagnosticos />} />
            <Route path = '/Contacto' element = {<Contacto />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
