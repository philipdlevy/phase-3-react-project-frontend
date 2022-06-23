import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"



function BookLister({ books }) {
  const [booksSorted, setBooksSorted] = useState([])
  const { id, title, author_name, description, price, pages } = books


  // sorting books
  // useEffect(() => {
  //   fetch("http://localhost:9292/books/all/title_ascending")
  //   .then((resp) => resp.json())
  //   .then((books) => setBooksSorted(books))

  //   .catch((error) => alert(error)) 
  // }, [])

  // to display filtered books
  // const displayedAscendingBooks = books.map((book) => {
  //   return <li className='fontcolor' key={book.
  //   id}>{book.title}</li>
  // })

  const displayedBooks = books.map((book) => {
    return <Link to={`/books/${book.id}`}> <li className='fontcolor' key={book.
    id}>{book.title}</li> </Link>
  })

  // const displayedFilteredBooks = books.map((book) => {
  //   return <Link to={`/books/${book.id}`}> <li className='fontcolor' key={books.
  //   id}>{book.title}</li> </Link>
  // })

  return (
    <div className='listerPosition'>
      <h2 className='fontcolor fixedPosition'>Book List</h2>
      <Link to={`/authors`}>
        <button className='sorting'>Sort by Authors</button>
      </Link>  
      {displayedBooks}
    </div>
  )
}

export default BookLister;
