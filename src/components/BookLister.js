import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"



function BookLister() {
  const [books, setBooks] = useState([])
  const [booksSorted, setBooksSorted] = useState([])
  const { id, title, author_name, description, price, pages } = books
  // console.log("books", books)

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((resp) => resp.json())
    .then((books) => setBooks(books))

    .catch((error) => alert(error)) 
  }, [])

  // sorting books
  useEffect(() => {
    fetch("http://localhost:9292/books/all/title_ascending")
    .then((resp) => resp.json())
    .then((books) => setBooksSorted(books))

    .catch((error) => alert(error)) 
  }, [])

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
      <h2 className='fontcolor'>Book List</h2>
      <button>
        Sort titles by ascending order
      </button>
      <button>
        Sort titles by descending order
      </button>
      <Link to={`/authors`}>
        <button>Sort by Authors</button>
      </Link>  
      {displayedBooks}
    </div>
  )
}

export default BookLister;
