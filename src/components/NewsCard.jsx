import React from "react";

const NewsCard = ({ title, description, src, url, author }) => {
  //   console.log(title, description, src, url);
  const getFirst60Words = (text) => {
    const words = text.split(" ");
    return words.slice(0, 60).join(" ");
  };
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={
            src
              ? src
              : "https://www.shutterstock.com/image-photo/word-news-written-on-blackboard-260nw-87238021.jpg"
          }
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="badge badge-secondary mt-2">{author}</div>
      </div>
      <div className="card-body">
        <p>
          {description
            ? getFirst60Words(description)
            : "Description Not available"}
        </p>
      </div>
      <div className="flex justify-end">
        <a
          href={url}
          target="_blank"
          className="border bg-blue-500 text-white p-2 w-1/4 m-2 rounded-lg"
          rel="noopener noreferrer"
        >
          <button className="">Read More</button>
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
