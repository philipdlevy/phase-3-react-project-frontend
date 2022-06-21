import React, { useState, useEffect  } from "react"
import {useParams, useHistory} from "react-router-dom"

function BookDetail() {
// state for exerciseObj that is selected
const [pickedBook, setPickedBook] = useState(null)
const [isLoaded, setIsLoaded] = useState(null)
console.log(pickedBook)


const history = useHistory();


const bookId = useParams().id
console.log(bookId)


useEffect(() => {
  fetch(`http://localhost:9292/books/${bookId}`)
  .then(resp => resp.json())
  // .then(console.log)     
  .then(bookData => {
    setPickedBook(bookData)
      setIsLoaded(true)
  })
  .catch((error) => alert(error));
}, [])

if (!isLoaded) return <h2>Loading...</h2>

  // const displayedBooks = books.map((book) => {
  //   return <li className='fontcolor' key={book.id}>{book.title}</li>
  // })

  const { id, title, author_name, description, price, pages } = pickedBook

  return (
    <div className='listerPosition fontcolor'>
        <h1>BookDetail</h1>
        <li>Title: {title}</li>
    </div>
  )
}

export default BookDetail;
