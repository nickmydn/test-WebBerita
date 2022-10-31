import axios from "axios";
import React, { useState, useEffect } from "react";
import Kesehatan from "./Kesehatan";

function KesehatanList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res3 = await axios.get("https://newsapi.org/v2/top-headlines?country=id&category=health&apiKey=097e3576f2f34e669917558a19b80787");
      console.log(res3);
      setArticles(res3.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return <Kesehatan title={article.title} urlToImage={article.urlToImage} url={article.url} description={article.description} />;
      })}
    </div>
  );
}

export default KesehatanList;
