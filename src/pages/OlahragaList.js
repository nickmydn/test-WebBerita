import axios from "axios";
import React, { useState, useEffect } from "react";
import Olahraga from "./Olahraga";

function OlahragaList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res5 = await axios.get("https://newsapi.org/v2/top-headlines?country=id&category=sports&apiKey=097e3576f2f34e669917558a19b80787");
      console.log(res5);
      setArticles(res5.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return <Olahraga title={article.title} urlToImage={article.urlToImage} url={article.url} description={article.description} />;
      })}
    </div>
  );
}

export default OlahragaList;
