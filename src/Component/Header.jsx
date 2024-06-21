import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setFilter } from "./redux/filterSlice";
import { FaBars, FaTimes, } from "react-icons/fa";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const dispatch = useDispatch();
  const filter = useSelector((state)=>state.articleFilter.filter);
  

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter(e.target.value));
  
  };

  return (
    <header className="max-w-screen px-5 h-[13%]  relative sm:fixed sm:top-0 sm:left-0 sm:right-0 bg-black">
      <nav className="flex justify-between items-center sm:flex-row sm:justify-between sm:items-center sm:py-4 sm:px-4 text-white">
        <NavLink to={"/"} className="p-3">React News Logo</NavLink>
        <form className={`${
            !nav ? 'hidden' : 'flex'
          } sm:flex sm:items-center sm:relative sm:bg-transparent absolute top-16 sm:top-0 sm:gap-3 left-0 w-full h-screen sm:h-auto sm:w-auto bg-transparent duration-300 dark:bg-[#0a192f] flex-col sm:flex-row py-3 sm:py-0 px-5 sm:px-0`} onSubmit={handleSubmit}>
          <input
            className="w-[100%] px-4 py-2 rounded-lg outline-none text-black"
            type="text"
            value={filter}
            placeholder="Search News ...."
            
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-500 py-2 px-3 rounded-lg w-[100%] sm:w-48 sm:py-27
          ">
            Search
          </button>
        </form>

        <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
        <NavLink className="p-2 rounded-md hidden sm:block" to={"/bookmark"}>Favorites</NavLink>
    

      </nav>
    </header>
  );
};

export default Header;
