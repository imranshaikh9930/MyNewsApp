import { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleStart, fetchArticleSuccess, fetchArticleFailure } from "./redux/fetchSlice";
import Pagination from "./Pagination";
import NewsCard from "./NewsCard";
import Categories from "./Categories";
import Loader from "./Loader";
import Header from "./Header";

const Home = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.articles);
  const searchQuery = useSelector((state) => state.article.search); // Ensure this matches your Redux state structure
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(7);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const lastIndexPage = currentPage * postPerPage;
  const firstIndexPage = lastIndexPage - postPerPage;

  const postPerPages = articles.slice(firstIndexPage, lastIndexPage);
  const pageCount = Math.ceil(articles.length / postPerPage);

  
const getData = useCallback(async () => {
  

  dispatch(fetchArticleStart());
  setLoading(true);
  
  try {
    let api = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b48b7912f12d4d7b900cc6373c06e341`;

    if (searchQuery) {
      api += `&q=${encodeURIComponent(searchQuery)}`;
    }

    if (category) {
      api += `&category=${encodeURIComponent(category)}`;
    }

    const resp = await fetch(api);

    if (!resp.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await resp.json();

    setLoading(false);
    dispatch(fetchArticleSuccess(data.articles));
    // dispatch(searchValue(""));
  } catch (error) {
    setLoading(false);
    dispatch(fetchArticleFailure(error.toString()));
  }
}, [dispatch, searchQuery, category]);
  

  useEffect(() => {
  
    getData(); 
  }, [getData]);

  const handleCategory = useCallback((category) => {
    setCategory(category);
    setCurrentPage(1);
  }, []);

  return (
    <>
    <Header/>
      <main className="text-white w-[100%] flex flex-wrap justify-center items-center sm:gap-4 sm:my-28 mx-auto overflow-hidden">
        <Categories handleCategory={handleCategory} />
        {loading && postPerPage > 0 ? <Loader /> : <>
          <NewsCard postPerPages={postPerPages} />
          <Pagination  postPerPages={postPerPages} currentPage={currentPage} setCurrentPage={setCurrentPage} pageCount={pageCount} className="flex justify-center items-center" />
        </>}
      
        
      </main>
    </>
  );
};

export default Home;
