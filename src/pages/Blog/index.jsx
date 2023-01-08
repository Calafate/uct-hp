import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { noticiasList } from '../../data/data';
import EmptyList from '../../components/common/EmptyList';
import './styles.css';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(noticiasList);

  useEffect(() => {
    let blog = noticiasList.find((blog) => blog.id === parseInt(id));
    setBlog(blog) 
    if (blog) {
      setBlog(blog);
    } 
  }, [id]);

  return (
    <>
      <Menu />
      <div className="container">
        {/* <Link className='blog-goBack' to='/Noticias'>
          <h6 className="text-end"><span>&#8592;</span> <span>Volver a Noticias</span></h6>
        </Link> */}
        {blog ? (
          <div className='blog-wrap'>
            <div>
              <h1>{blog.title}</h1>
            </div>
            <p>{blog.created}</p>
            <img src={blog.cover} alt='imagen' />
            <p className='blog-desc text-start'>{blog.description}</p>
          </div>
        ) : (
          <EmptyList />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Blog;
