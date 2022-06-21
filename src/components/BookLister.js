import React, { useState, useEffect } from 'react'


function BookLister() {
  const [books, setBooks] = useState([])
  // const { id, title, author_name, description, price, pages } = bookObj
  console.log(books)

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((resp) => resp.json())
    .then((books) => setBooks(books))

    .catch((error) => alert(error)) 
  }, [])

  const displayedBooks = books.map((exercise) => {
    return <li className='fontcolor'> {exercise.title}</li>
  })

  return (
    <div className='listerPosition'>
        <h2 className='fontcolor'>Book List</h2>
        {displayedBooks}
    </div>
  )
}

export default BookLister;
