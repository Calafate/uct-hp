import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Institucional from './pages/Institucional';
import Noticias from './pages/Noticias';
import Investigacion from './pages/Investigacion';
import Diagnosticos from './pages/Diagnosticos';
import Contacto from './pages/Contacto';
import Formacion from './pages/Formacion';
import Links from './pages/Links';
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
          </Routes>
    </div>
  );
}

export default App;
