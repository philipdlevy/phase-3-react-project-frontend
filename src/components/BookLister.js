import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"


function BookLister() {
  const [books, setBooks] = useState([])
  const { id, title, author_name, description, price, pages } = books
  // console.log("books", books)

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((resp) => resp.json())
    .then((books) => setBooks(books))

    .catch((error) => alert(error)) 
  }, [])

  // deleting exercises
  // function onDeleteBook(id) {
  //   const updatedBookArray = books.filter(book => book.id != parseInt(id))
  //   setBooks(updatedBookArray)
  //   console.log(books)
  // }

  const displayedBooks = books.map((book) => {
    return <Link to={`/books/${book.id}`}> <li className='fontcolor' key={books.
    id}>{book.title}</li> </Link>
  })

  return (
    <div className='listerPosition'>
        <h2 className='fontcolor'>Book List</h2>
          {displayedBooks}
    </div>
  )
}

export default BookLister;
