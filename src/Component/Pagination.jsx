import React from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

// eslint-disable-next-line react/prop-types
const Pagination = ({ setCurrentPage, pageCount }) => {

  const filterArticles = useSelector((state)=>state.filteredArticles.filterArticles);
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected + 1); // +1 because ReactPaginate uses 0-based indexing
  };

  return (
    <div className='text-white w-[70%] sm:w-full '>
      {
        filterArticles > 0  ? <ReactPaginate
        breakLabel='...'
        nextLabel=">"
        previousLabel="<"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        activeClassName='bg-blue-500 text-white rounded-md'
        pageClassName='page-item'
        pageLinkClassName='block px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 hover:text-black transition-colors'
        previousClassName='page-item'
        previousLinkClassName='block px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 hover:text-black transition-colors'
        nextClassName='page-item'
        nextLinkClassName='block px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 hover:text-black transition-colors'
        breakClassName='page-item'
        breakLinkClassName='block px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-200 hover:text-black transition-colors'
        containerClassName='flex justify-center items-center gap-2 p-4'
        className='flex justify-center w-[70%] sm:w-[100%] mx-auto items-center gap-4 p-3 mt-3 sm:mt-4'
      /> : 

      <div className="text-white text-2xl text-center">No Articles Found</div>
      }
   


    </div>
  );
};

export default Pagination;
