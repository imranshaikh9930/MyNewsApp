import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import image from "./assets/news.jpeg";
import { MdDelete } from "react-icons/md";

const Bookmark = () => {
  const [bookmarks, setBookMarks] = useState([]);

  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem("favorites")) || [];
    setBookMarks(storedBookmarks);
  }, []);

  const handleRemoveArticle = (index) => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favoriteItems.filter((item, idx) => idx !== index);

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setBookMarks(updatedFavorites);
  };

  return (
    <>
      <h1 className="text-5x text-white text-center">Bookmark</h1>
      <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center sm:mx-auto sm:px-2 md:px-3 gap-6 w-[100%] sm:mt-24">
      {bookmarks.length > 0 ? (
        bookmarks.map((news, index) => (
          <div
            className="max-w-[280px] sm:h-[380px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={news.url ? news.url : index}
          >
            <div>
              <img
                className="rounded-t-lg w-[100%] h-[150px] sm:h-[180px] object-cover"
                src={news.urlToImage ? news.urlToImage : image}
                alt={news.title}
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-sm sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {news.title ? news.title.slice(0, 50) : ""}
                </h5>
              </div>
              <p className="mb-3 text-sm sm:text-md font-normal text-gray-700">
                {news.description
                  ? news.description.slice(0, 45)
                  : "Description Not Available"}
              </p>
              <div className="flex justify-between w-[100%]">
              <NavLink
                to={`/news/${news.title ? news.title : news.url}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </NavLink>
              <button onClick={()=> handleRemoveArticle(index)}  className="text-black text-xl">
              <MdDelete/>
              {/* Remove */}
              </button>
              </div>
             
            </div>
          </div>
        ))
      ) :      
        // <Loader/>
        <div className="text-white text-3xl text-center">No Favorite Found</div>
    
      }
    </div>
    </>
  );
};

export default Bookmark;
