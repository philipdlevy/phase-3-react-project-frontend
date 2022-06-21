import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"


function BookLister() {
  const [books, setBooks] = useState([])
  const { id, title, author_name, description, price, pages } = books
  console.log("books", books)

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((resp) => resp.json())
    .then((books) => setBooks(books))

    .catch((error) => alert(error)) 
  }, [])

  const displayedBooks = books.map((book) => {
    return <li className='fontcolor' key={book.id}> {book.title}</li>
  })

  return (
    <div className='listerPosition'>
        <h2 className='fontcolor'>Book List</h2>
        <Link to={`/books/${id}`}>
        {displayedBooks}
        </Link>
    </div>
  )
}

export default BookLister;
