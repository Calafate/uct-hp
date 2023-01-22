import { useState, useEffect } from "react";
import { noticiasList } from "../data/data";
import { Link } from "react-router-dom";
import "../styles/noticiasHome.css";

const NoticiasHome = () => {
  const [blog, setBlog] = useState(noticiasList);
  const [firstNotice, setFirstNotice] = useState(true);

  let cant = noticiasList.length;

  useEffect(() => {
    let blog = noticiasList.filter((blog) => {
      return blog.id === cant - 2 || blog.id === cant - 1 || blog.id === cant;
    });
    if (blog) {
      blog.sort((a, b) => b.id - a.id);
      setBlog(blog);
    }
  }, [cant]);

  return (
    <div className="container">
      <h2 className="pt-3 pb-3">Últimas Noticias</h2>
      {blog.map((nota) => (
        <div key={nota.id}>
          <hr className="noticia-hr" />
          <div className="noticia">
            <div className="noticia-img">
              <img src={nota.cover} alt="imagen" />
              <p>{nota.created}</p>
            </div>
            <div className="noticia-body">
              <h5>{nota.title}</h5>
              <p>{nota.description}</p>
              <Link className="blogItem-link text-end" to={`/blog/${nota.id}`}>
                <p>Seguir Leyendo</p>
              </Link>
            </div>
          </div>
          <hr className="noticia-hr" />
        </div>
      ))}
    </div>
  );
};

export default NoticiasHome;
