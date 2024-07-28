import React, { useState } from "react";
import { useParams } from "react-router-dom";
import NewsBoard from "../components/NewsBoard";
import Navbar from "../components/Navbar";

const NewsByCategory = () => {
  const { category } = useParams();
  const [searchListCategory, setSearchListCategory] = useState("");
  console.log(category);

  return (
    <div>
      <Navbar setSearchListCategory={setSearchListCategory} />
      <NewsBoard searchListCategory={searchListCategory} category={category} />
    </div>
  );
};

export default NewsByCategory;
