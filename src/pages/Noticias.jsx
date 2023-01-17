import React, { useState } from 'react';
import EmptyList from '../components/common/EmptyList';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import BlogList from '../components/Noticias/BlogList';
import SearchCategory from '../components/Noticias/SearchCategory';
import { noticiasList } from '../data/data';
import '../styles/noticias.css'
import ScrollButton from '../components/ScrollButton';


const Noticias = () => {
  const [news, setNews] = useState(noticiasList);
  const [busqueda, setBusqueda] = useState("");

  // filtro por categoria
  const allCategories = [
		'Todas',
		...new Set(noticiasList.map(article => article.category)),
	];
	const [categories, setCategories] = useState(allCategories);
  const filterCategory = (category) => {
		if (category === 'Todas'){
      setCategories(allCategories)
			setNews(noticiasList)
			return
		}
	const filteredData = noticiasList.filter(article => article.category === category);
		setNews(filteredData)
	}

// filtro por texto en el titulo
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }
  const filtrar=(terminoBusqueda)=>{
    let resultadosBusqueda = news.filter((elemento) => {
      if(elemento.title.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
        return elemento;
      } return false;
    });
    setNews(resultadosBusqueda);
  }
  const limpiarFiltroBUsqueda = (e) => {
    setBusqueda("")
    setNews(noticiasList)
  }

  return (
    <div>
      <Menu />
      <div className="container mt-5 news-container" >
        <div className="news-block" >
          {!news.length ? <EmptyList /> : <BlogList news={news} />}
        </div>
        <div className="search-block">
          <div className = "search-item">
            <input
              type = "text" 
              value = {busqueda}
              placeholder = "Ingrese título a buscar" 
              onChange={handleChange} 
              />
              {busqueda && <span onClick={limpiarFiltroBUsqueda}>X</span>}
          </div>
          <hr />
          <div className="category-item">
            <div>
              <h6>Categorías:</h6>
            </div>
            <SearchCategory 
                categories={categories} 
                filterCategory={filterCategory}
            />
          </div>
          <hr />
        </div>
        <ScrollButton />
      </div>
      <Footer />
    </div>
  );
};

export default Noticias;
