import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const BlogItem = ({
  blog: {
    description,
    title,
    cover,
    created,
    category,
    id,
  },
}) => {
  return (
    <div className='blogItem-wrap text-start'>
      <h5 className="blogItem-title">{title}</h5>
      <div className="blogItem-date-category">
        <p className="text-start">{created}</p>
        <p className="text-start blogItem-category">{category}</p>
      </div>
      <img className='blogItem-cover' src={cover} alt='cover' />
      <p className='blogItem-desc'>{description}</p>
      <Link className='blogItem-link' to={`/blog/${id}`}>
        <p>Seguir Leyendo</p>
      </Link>
    </div>
  );
};

export default BlogItem;
