import React from 'react';
import PaginationStyled from './PaginationStyled';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationStyled>
      <nav>
        <ul className='pagination'>
          {pageNumbers.map(number => {
            return (
              <li key={number} className={`${currentPage === number ? 'active ' : ''}controls`}>
                <a onClick={() => paginate(number)} className='pagination-link'>
                  {number}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </PaginationStyled>
  );
};

export default Pagination;
