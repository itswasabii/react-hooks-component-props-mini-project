// ArticleList.js
import React from 'react';
import Article from './Article';

function ArticleList(props) {
  const articles = props.articles?.posts || []; 

  return (
    <main>
      {articles.map((article, index) => (
        <Article
          key={index}
          title={article.title}
          date={article.date || "January 1, 1970"}
          preview={article.preview}
        />
      ))}
    </main>
  );
}

export default ArticleList;
