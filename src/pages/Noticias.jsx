import React, { useState } from 'react';
import EmptyList from '../components/common/EmptyList';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import BlogList from '../components/Noticias/BlogList';
/* import SearchBar from '../components/Noticias/SearchBar'; */
import SearchCategory from '../components/Noticias/SearchCategory';
import { noticiasList } from '../data/data';
import '../styles/noticias.css'


const Noticias = () => {
  const [blogs, setBlogs] = useState(noticiasList);
  /* const [searchKey, setSearchKey] = useState(''); */

  // filtro por categoria
  const allCategories = [
		'Todas',
		...new Set(noticiasList.map(article => article.category)),
	];
	const [categories, setCategories] = useState(allCategories);
  const filterCategory = (category) => {
		if (category === 'Todas'){
      setCategories(allCategories)
			setBlogs(noticiasList)
			return
		}
	const filteredData = noticiasList.filter(article => article.category === category);
		setBlogs(filteredData)
	}

  // Search submit
  /* const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  }; */

  // Search for blog by category
  /* const handleSearchResults = () => {
    const allBlogs = noticiasList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  }; */

  // Clear search and show all blogs
  /* const handleClearSearch = () => {
    setBlogs(noticiasList);
    setSearchKey('');
  }; */

  return (
    <div>
      <Menu />
      <div className="category-container">
        <div>Categorías: </div>
        <SearchCategory 
          categories={categories} 
          filterCategory={filterCategory}
          />
      </div>
      
      {/* Search Bar 
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />*/}
      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      <Footer />
    </div>
  );
};

export default Noticias;
