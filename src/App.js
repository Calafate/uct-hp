import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Home from './pages/home/Home';
import Institucional from './pages/institucional/Institucional';
import Noticias from './pages/noticias/Noticias';
import Investigacion from './pages/investigacion/Investigacion';
import Diagnosticos from './pages/diagnosticos/Diagnosticos';
import Contacto from './pages/contacto/Contacto';
import Formacion from './pages/formacion/Formacion';
import Links from './pages/links/Links';
import Blog from './pages/Blog';

function App() {
  return (
    <div className="App">
          <Routes>
            <Route path = '/' exact element = {<Home />} />
            <Route path = '/Home' element = {<Home />} />
            <Route path = '/Institucional' element = {<Institucional />} />
            <Route path = '/Noticias' element = {<Noticias />} />
            <Route path = '/Investigacion' element = {<Investigacion />} />
            <Route path = '/Diagnosticos' element = {<Diagnosticos />} />
            <Route path = '/Contacto' element = {<Contacto />} />
            <Route path = '/Links' element = {<Links />} />
            <Route path = '/Formacion' element = {<Formacion />} />
            <Route path = '/blog/:id' element = {<Blog />} />
            <Route path = '*' element = {<Navigate to = "/" replace={true} />} />
          </Routes>
    </div>
  );
}

export default App;
