import React, { useState, useEffect } from "react";
import axios from "axios";
import Hiburan from "./Hiburan";

function HiburanList() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res1 = await axios.get("https://newsapi.org/v2/top-headlines?country=id&category=entertainment&apiKey=097e3576f2f34e669917558a19b80787");
      console.log(res1);
      setArticles(res1.data.articles);
    };
    getArticles();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return <Hiburan title={article.title} urlToImage={article.urlToImage} url={article.url} description={article.description} />;
      })}
    </div>
  );
}

export default HiburanList;
