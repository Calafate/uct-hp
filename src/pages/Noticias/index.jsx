import React, { useState } from 'react';
import EmptyList from '../../components/common/EmptyList';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';
import BlogList from '../../components/Noticias/BlogList';
import SearchBar from '../../components/Noticias/SearchBar';
import { noticiasList } from '../../data/data';


const Noticias = () => {
  const [blogs, setBlogs] = useState(noticiasList);
  const [searchKey, setSearchKey] = useState('');

  // Search submit
  const handleSearchBar = (e) => {
    e.preventDefault();
    handleSearchResults();
  };

  // Search for blog by category
  const handleSearchResults = () => {
    const allBlogs = noticiasList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  // Clear search and show all blogs
  const handleClearSearch = () => {
    setBlogs(noticiasList);
    setSearchKey('');
  };

  return (
    <div>
      <Menu />
      <h2>Noticias de Interes</h2>
      {/* Search Bar */}
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchBar}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      <Footer />
    </div>
  );
};

export default Noticias;
