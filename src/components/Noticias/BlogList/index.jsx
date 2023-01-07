import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='container blogList-wrap'>
      {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
