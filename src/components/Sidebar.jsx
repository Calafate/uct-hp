import { Link } from "react-router-dom";
import '../styles/sidebar.css';
import ButtonList from '../components/ButtonList';
import data from '../data/data';
import { useState } from 'react';

export default function Sidebar() {
    
    const allCategories = [
		'Todas',
		...new Set(data.map(article => article.category)),
	];

    const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

    const filterCategory = (category) => {
		if (category === 'Todas'){
			setArticles(data)
			return
		}

	const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h5>SIDEBAR</h5>
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIAS</span>
        <ButtonList categories={categories} filterCategory={filterCategory}/>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Seguinos</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}