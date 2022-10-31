import React, { useState, useEffect } from "react";
import axios from "axios";
import Sains from "./Sains";

function SainsList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res4 = await axios.get("https://newsapi.org/v2/top-headlines?country=id&category=science&apiKey=097e3576f2f34e669917558a19b80787");
      console.log(res4);
      setArticles(res4.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return <Sains title={article.title} urlToImage={article.urlToImage} url={article.url} description={article.description} />;
      })}
    </div>
  );
}

export default SainsList;
