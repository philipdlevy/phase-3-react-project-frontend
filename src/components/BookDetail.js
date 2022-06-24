import React, { useState, useEffect  } from "react"
import {useParams, useHistory} from "react-router-dom"

import EditBook from "./EditBook"

function BookDetail({ books, onDeleteBook, toggleBook, setToggleBook }) {
  const [pickedBook, setPickedBook] = useState(null)
  const [isLoaded, setIsLoaded] = useState(null)
  const [editing, setEditing] = useState(false)
  // const [toggle, setToggle] = useState(true)
 
  const history = useHistory();
  let {id} = useParams()

  useEffect(() => {
    const book = books.find((b => b.id == id))
    setPickedBook(book)
    setIsLoaded(true)
  }, [toggleBook])

  // fetch for deleting an object
  function handleDelete() {
    fetch(`http://localhost:9292/books/${id}`, {
      method: "DELETE"
    })
    .then((resp) => resp.json())
    .then(() => {
      onDeleteBook(id)
      history.push("/books")
    })
    .catch((error) => alert(error));
  }
  if (!isLoaded) return <h2>Loading...</h2>


  const {title, description, price, pages } = pickedBook
  const author_name = pickedBook.author.name

  if (editing) {
    return <EditBook pickedBook={pickedBook} toggleBook={toggleBook} setToggleBook={setToggleBook} setEditing={setEditing}/>
  } else {
    return (
      <div className='listerPosition fontcolor'>
        <h1>BookDetail</h1>
        <li>Title: {title}</li>
        <li>Author: {author_name}</li>
        <li>Description: {description}</li>
        <li>Price: ${price}</li>
        <li>Pages: {pages}</li>
        <br></br>
        <button
          className="backButton"
          onClick={() => history.push("/books")}>
          Back
        </button>
        <button className="editButton" onClick={() => setEditing(true)}>
          edit
        </button>
        <button className="deleteButton" onClick={handleDelete}>
          Delete
        </button>
      </div>
    )
  }
}

export default BookDetail;
