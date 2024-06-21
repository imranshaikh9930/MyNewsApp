import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setFilter } from "./redux/filterSlice";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const handleClick = () => setNav(!nav);
  const dispatch = useDispatch();
  // const filter = useSelector((state) => state.articleFilter.filter);

  const handleChange = (e) => {
    setSearchTerm(e.target.value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter(searchTerm));
    setSearchTerm("");
    setNav(!nav)
  };

  return (
    <header className="max-w-screen px-5 h-[13%] relative sm:fixed sm:top-0 sm:left-0 sm:right-0 bg-black">
      <nav className="flex justify-between items-center sm:flex-row sm:justify-between sm:items-center sm:py-4 sm:px-4 text-white">
        <NavLink to={"/"} className="p-3 text-2xl text-bold">My News</NavLink>
        <form
          className={`${
            !nav ? 'hidden' : 'flex'
          } sm:flex sm:items-center sm:relative sm:bg-transparent absolute top-12 sm:top-0 sm:gap-3 left-0 w-full h-screen z-100 sm:h-auto sm:w-auto bg-black duration-300 sm:duration-300  flex-col items-center gap-3  sm:flex-row py-3 sm:py-0 px-5 sm:px-0`}
          onSubmit={handleSubmit}
        >
          <input
            className="w-[60%] sm:w-[100%] px-4 py-2 rounded-lg outline-none text-black"
            type="text"
            value={searchTerm} // Bind input value to local state
            placeholder="Search News ...."
            onChange={handleChange}
          />
          <button type="submit" className="bg-blue-500 py-2 px-3 rounded-lg w-[60%]  sm:w-48 sm:py-2z">
            Search
          </button>
          <NavLink className="p-2 rounded-md flex sm:hidden" to={"/bookmark"}>Favorites</NavLink>
        </form>

        <div onClick={handleClick} className="sm:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
      
        <NavLink className="p-2 rounded-md hidden sm:block" to={"/bookmark"}>Favorites</NavLink>
      </nav>
    </header>
  );
};

export default Header;
