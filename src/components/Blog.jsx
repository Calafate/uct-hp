import { useState } from 'react';
import ArticleList from '../components/ArticleList';
import ButtonList from '../components/ButtonList';
import data from '../data/data';
import '../styles/blog.css'


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
        <div className="container">
            <div className='title'>
                <h2>
                    Buscar <span>Noticias</span> 
                </h2>
                    
            </div>

            <ButtonList categories={categories} filterCategory={filterCategory}/>
            <ArticleList articles={articles}/>
        </div>
    )
}

export default Blog