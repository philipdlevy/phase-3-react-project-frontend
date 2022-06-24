import React, { useState } from 'react'
import {Link} from "react-router-dom"



function BookLister({ books }) {
  const { id, title, author_name, description, price, pages } = books


  const displayedBooks = books.map((book) => {
    return <Link to={`/books/${book.id}`}> <li className='fontcolor' key={book.
    id}>{book.title}</li> </Link>
  })

  return (
    <div className='listerPosition'>
      <h2 className='fontcolor fixedPosition'>Book List</h2>
      <Link to={`/authors`}>
        <button className='sorting'>List by Authors</button>
      </Link>  
      {displayedBooks}
    </div>
  )
}

export default BookLister;
