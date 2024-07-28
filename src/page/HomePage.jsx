import React, { useEffect, useState } from "react";
import NewsBoard from "../components/NewsBoard";
import Navbar from "../components/Navbar";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const jsonData = await result.json();
      setArticles(jsonData.articles);
    };
    fetchData();
  }, []);
  console.log(articles);
  return (
    <div>
      <Navbar />
      <NewsBoard />
    </div>
  );
};

export default HomePage;
