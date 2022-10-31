import React, { useState, useEffect } from "react";
import axios from "axios";
import Trending from "./Trending";

function TrendingList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=id&apiKey=097e3576f2f34e669917558a19b80787");
      console.log(response);
      setArticles(response.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return <Trending title={article.title} urlToImage={article.urlToImage} url={article.url} description={article.description} />;
      })}
    </div>
  );
}

export default TrendingList;
