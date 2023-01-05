import { useState } from 'react';
import ArticleList from '../components/ArticleList';
import ButtonList from '../components/ButtonList';
import data from '../data/data';
import '../styles/blog.css'
import Sidebar from './Sidebar';


function Blog() {

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
        <div className="container blog">
            <div className="blogLeft">
                <ArticleList articles={articles}/>
            </div>
            <div className='title blogright'>
                <h2>
                    Buscar <span>Noticias</span> 
                </h2>
                <Sidebar />    
            </div>
            
        </div>
    )
}

export default Blog