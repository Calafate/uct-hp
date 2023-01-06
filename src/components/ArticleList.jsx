

function ArticleList ({ articles }) {
	return (
        <div className="article-list">
            {articles.map(article => (
                <div className="article-container" key={article.id}>
                    <div className="img-container">
                        {/* <img src={article.image} alt={article.title} /> */}
                        {/* <img src={require(`../img/noticias/${article.image}`)} alt="foto" />
                        <img src={require(`../img/noticias/020921.jpg`)} alt="foto" /> */}
                        <h2>{article.image}</h2>
                    </div>
                    <div className="article-body">
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        <div className="article-footer">
                            <span>{article.date}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default ArticleList