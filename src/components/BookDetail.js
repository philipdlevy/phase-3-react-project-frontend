import React, { useState, useEffect  } from "react"
import {useParams, useHistory} from "react-router-dom"

import AddBook from './AddBook';

function BookDetail({ books, onDeleteBook }) {
  // state for exerciseObj that is selected
  const [pickedBook, setPickedBook] = useState(null)
  const [isLoaded, setIsLoaded] = useState(null)
  const [editing, setEditing] = useState(false)


  // const [titleData, setTitleData] = useState("")
  // const [authorData, setAuthorData] = useState("")
  // const [descriptionData, setDescriptionData] = useState("")
  // const [priceData, setPriceData] = useState("")
  // const [pagesData, setPagesData] = useState("")
 
  const history = useHistory();
  let {id} = useParams()

  useEffect(() => {
    const book = books.find((b => b.id == id))
    setPickedBook(book)
    setIsLoaded(true)
    // fetch(`http://localhost:9292/books/${id}`)
    // .then(resp => resp.json())    
    // .then(bookData => {
    //   setPickedBook(bookData)
    //   setIsLoaded(true)
    // })
    // .catch((error) => alert(error));
  }, [])

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





  const {title, author_name, description, price, pages } = pickedBook

  if (editing) {
    return <AddBook />
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
