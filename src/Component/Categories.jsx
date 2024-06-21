
// eslint-disable-next-line react/prop-types
const Categories = ({ handleCategory }) => {

  

  return (
    <div className="sm:w-[90%] sm:gap-4">
      <div className="hidden  sm:flex sm:justify-center gap-4 mx-auto  sm:w-[100%] sm:gap-4 sm:py-2">

  
      <button className="bg-purple-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("entertainment")}>
        Entertainment
      </button>
      <button className="bg-orange-500 px-2 py-1 rounded-lg" onClick={() => handleCategory("sports")}>Sports</button>
      <button className="bg-blue-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("general")}>General</button>
      <button className="bg-green-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("health")}>Health</button>
      <button className="bg-cyan-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("technology")}>Technology</button>
      <button className="bg-red-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("science")}>Science</button>
      </div>
      {/* Mobile View */}
      <div className=" flex flex-wrap mx-auto w-[100%] justify-center py-4 gap-4 sm:hidden">

     
      <button className="bg-purple-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("entertainment")}>
        Entertainment
      </button>
      <button className="bg-orange-500 px-2 py-1 rounded-lg" onClick={() => handleCategory("sports")}>Sports</button>
      <button className="bg-blue-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("general")}>General</button>
      <button className="bg-green-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("health")}>Health</button>
      <button className="bg-cyan-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("technology")}>Technology</button>
      <button className="bg-red-600 px-2 py-1 rounded-lg" onClick={() => handleCategory("science")}>Science</button>
      </div>
    </div>
  );
};

export default Categories;
