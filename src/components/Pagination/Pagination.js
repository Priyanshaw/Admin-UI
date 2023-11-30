import React from 'react'

export default function Pagination({currentPage,totalPages,pageNumbers,handlePagination}) {
  return (
    <div className='pagiantion-container'>
        <span>
            page {totalPages<1?0: currentPage} of {totalPages}
        </span>
        <div className='pagination'>
            <button onClick={()=>handlePagination(1)} disabled={currentPage === 1}>First</button>
            <button onClick={()=>handlePagination(currentPage -1)} disabled={currentPage === 1}>Previous</button>
            {pageNumbers.map((page)=>(
                <button key={page} onClick={()=>handlePagination(page)}>{page}</button>
            ))}
            <button onClick={()=>handlePagination(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
            <button onClick={()=>handlePagination(totalPages)} disabled={currentPage === totalPages}>Last</button>
        </div>
    </div>
  )
}

