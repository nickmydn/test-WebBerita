import React, { useState, useEffect } from "react";
import axios from "axios";
import Bisnis from "./Bisnis";

function BisnisList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res2 = await axios.get("https://newsapi.org/v2/top-headlines?country=id&category=business&apiKey=097e3576f2f34e669917558a19b80787");
      console.log(res2);
      setArticles(res2.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {" "}
      {articles.map((article) => {
        return <Bisnis title={article.title} urlToImage={article.urlToImage} url={article.url} description={article.description} />;
      })}
    </div>
  );
}

export default BisnisList;
