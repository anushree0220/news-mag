import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlMagnifier } from "react-icons/sl";

const category = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Sports", path: "/news/sports" },
  { id: 3, name: "Technology", path: "/news/technology" },
  { id: 4, name: "Cricket", path: "/news/cricket" },
  { id: 5, name: "Stock Market", path: "/news/stock market" },
];

const Navbar = ({ setSearchListCategory }) => {
  const [searchList, setSearchList] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  console.log(setSearchListCategory);

  const handleCategoryClick = (categoryName) => {
    setSearchList(categoryName);
    setDropdownVisible(false);
  };

  const handleSearchChange = (event) => {
    setSearchList(event.target.value);
  };

  const handleSearchClick = () => {
    setSearchListCategory(searchList);
    setSearchList("");
  };

  console.log(searchList);
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden"
              onClick={() => setDropdownVisible(!dropdownVisible)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {dropdownVisible &&
                category.map((data, index) => (
                  <li
                    className="ml-5 md:text-xl cursor-pointer p-1 text-lg rounded-lg"
                    key={data.id}
                    onClick={() => handleCategoryClick(data.name)}
                  >
                    <Link to={data.path}>{data.name}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">News App</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {category.map((data, index) => (
              <li
                className="ml-2 bg-gray-50 md:text-base	 cursor-pointer border p-2 rounded-lg"
                key={data.id}
                onClick={() => handleCategoryClick(data.name)}
              >
                <Link to={data.path}>{data.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end flex gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              onChange={handleSearchChange}
              value={searchList}
            />
          </div>
          <a
            onClick={handleSearchClick}
            className="btn btn-primary text-lg font-bold"
          >
            <SlMagnifier />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
