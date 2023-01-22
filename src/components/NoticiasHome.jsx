import { useState, useEffect } from "react";
import { noticiasList } from "../data/data";
import { Link } from "react-router-dom";
import "../styles/noticiasHome.css";

const NoticiasHome = () => {
  const [blog, setBlog] = useState(noticiasList);

  let cant = noticiasList.length;

  useEffect(() => {
    let blog = noticiasList.filter((blog) => {
      return (
        blog.id === cant - 3 ||
        blog.id === cant - 2 ||
        blog.id === cant - 1 ||
        blog.id === cant
      );
    });
    if (blog) {
      blog.sort((a, b) => b.id - a.id);
      setBlog(blog);
    }
  }, [cant]);

  return (
    <div className="container">
      <h2 className="container-h2">Últimas Noticias</h2>
      <div className="grid-container">
        {blog.map((nota) => (
          <div key={nota.id} className="grid-item">
            <Link to={`/blog/${nota.id}`}>
              <img src={nota.cover} className="grid-img" alt="."/>
              <div className="grid-caption">
                <h6 className="grid-title">{nota.title}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoticiasHome;

/* <hr className="noticia-hr" />
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
          ***********************
          <div className="portfolio-item">
                <div className="caption">
                  <div className="caption-content">
                    <div className="h2">{nota.title}</div>
                    <p className="mb-0">safd afa fsa asfdada</p>
                    </div>
                    <div className="caption-img">
                      <img className="img-fluid" src={nota.cover} alt="imagen" />
                    </div>
                  </div>
                  
                </div>
          
          */
