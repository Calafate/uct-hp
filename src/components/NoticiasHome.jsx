import { useState, useEffect } from "react";
import { noticiasList } from "../data/data";
import "../styles/noticiasHome.css";

const NoticiasHome = () => {
  const [blog, setBlog] = useState(noticiasList);

  let cant = noticiasList.length;

  useEffect(() => {
    let blog = noticiasList.filter((blog) => {
      return blog.id === cant || blog.id === cant - 1;
    });

    if (blog) {
      setBlog(blog);
    }
  }, [cant]);

  return (
    <div className="container">
      {blog.map((nota) => (
        <div key={nota.id}>
          <hr className="noticia-hr"/>
          <div className="noticia">
            <div className="noticia-img">
              <img 
                src={nota.cover}
                alt="imagen"
              />
              <p>{nota.created}</p>
            </div>
            <div className="noticia-body">
              <h5>{nota.title}</h5>
              <p>{nota.description}</p>
            </div>
          </div>
          <hr className="noticia-hr" />
        </div> 
      ))}
    </div> 
  );
};

export default NoticiasHome;
