/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/news.jpeg";
// import { useDispatch, useSelector } from "react-redux";
// import { setFilteredArticles } from "./redux/filterArticles";
import toast from "react-hot-toast";
import Loader from "./Loader";
import { MdOutlineSaveAlt } from "react-icons/md";

const NewsCard = ({ postPerPages }) => {
  // const dispatch = useDispatch();
  // const filter = useSelector((state) => state.articleFilter.filter);

  // if(filter){
    
  //   filter.toLowerCase();
  // }

  // const filteredArticles =  postPerPages.filter((article) => article.title?.toLowerCase().includes(filter));

  // useEffect(() => {
  //   dispatch(setFilteredArticles(filteredArticles.length));
  // }, [dispatch, filteredArticles]);

  console.log(postPerPages);

  const handleBookmark = (index) => {
    toast.success('Favorites Added');
    const favoriteItems = JSON.parse(localStorage.getItem('favorites')) || [];
    const article = postPerPages[index];

    if (!favoriteItems.some(item => item.id === article.id)) {
      favoriteItems.push(article);
      localStorage.setItem('favorites', JSON.stringify(favoriteItems));
    } else {
      console.log('Item already exists in favorites');
    }
  };

  return (
    <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center sm:mx-auto sm:px-2 md:px-3 gap-6 w-full">
      {postPerPages.length > 0 ? (
        postPerPages.map((news, index) => (
          <div
            className="max-w-[280px] sm:h-[380px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            key={news.url ? news.url : index}
          >
            <div>
              <img
                className="rounded-t-lg w-full h-[150px] sm:h-[180px] object-cover"
                src={news.urlToImage ? news.urlToImage : image}
                alt={news.title}
              />
            </div>
            <div className="p-5">
              <div>
                <h5 className="mb-2 text-sm sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {news.title ? news.title.slice(0, 50) : "No Title"}
                </h5>
              </div>
              <p className="mb-3 text-sm sm:text-md font-normal text-gray-700 dark:text-gray-300">
                {news.description ? news.description.slice(0, 45) : "Description Not Available"}
              </p>
              <div className="flex justify-between w-full">
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
                <button onClick={() => handleBookmark(index)} className="text-black text-xl">
                  <MdOutlineSaveAlt />
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default NewsCard;
