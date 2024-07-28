import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsBoard = ({ category, searchListCategory }) => {
  console.log(searchListCategory);
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    if (category) {
      const fetchData = async () => {
        const query = searchListCategory || category;
        const url = query
          ? `https://newsapi.org/v2/everything?q=${query}&apiKey=${
              import.meta.env.VITE_API_KEY
            }`
          : `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
              import.meta.env.VITE_API_KEY
            }`;

        const result = await fetch(url);
        const jsonData = await result.json();
        setArticles(jsonData.articles);
      };
      fetchData();
    } else if (category == "/") {
      fetchTopHeadlines();
    } else {
      fetchTopHeadlines();
    }
  }, [category, searchListCategory]);

  const fetchTopHeadlines = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=f15985171c6d4a3cb0456d125e5f19f2`
    );
    const jsonData = await response.json();
    const data = jsonData?.articles;
    // console.log(data);
    setArticles(data);
  };

  return (
    <>
      <h2 className="text-center m-5 md:text-2xl text-lg">
        {" "}
        <span className="border bg-red-600 text-white rounded-lg p-2 mr-2">
          {category ? `${category}` : "Latest"}
        </span>
        News
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {articles ? (
          articles?.map((data, index) => (
            <NewsCard
              key={index}
              title={data?.title}
              description={data?.description}
              src={data?.urlToImage}
              url={data?.url}
              author={data?.author}
            />
          ))
        ) : (
          <div className="text-2xl text-white-500 border bg-red-400 p-2 rounded-lg">
            Loading...
          </div>
        )}
        {/* <NewsCard /> */}
      </div>
    </>
  );
};

export default NewsBoard;
