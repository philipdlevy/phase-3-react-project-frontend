import React, { useState, useEffect  } from "react"
import {useParams, useHistory} from "react-router-dom"

function BookDetail() {
  // state for exerciseObj that is selected
  const [pickedBook, setPickedBook] = useState(null)
  // const [pickedBook, setPickedBook] = useState({title: "", author_name: "", description: "", price: "", pages: ""})
  const [isLoaded, setIsLoaded] = useState(null)
  console.log(pickedBook)

 
  const history = useHistory();


  let {id} = useParams()


  useEffect(() => {
    fetch(`http://localhost:9292/books/${id}`)
    .then(resp => resp.json())    
    .then(bookData => {
      setPickedBook(bookData)
      setIsLoaded(true)
    })
    .catch((error) => alert(error));
  }, [])

  // fetch for deleting an object
  // function handleDelete() {
  //   fetch(`http://localhost:9292/books/${id}`, {
  //     method: "DELETE"
  //   })
  //   .then((resp) => resp.json())
  //   .then(() => {
  //     onDeleteBook(id)
  //   })
  //   .catch((error) => alert(error));
  // }

  if (!isLoaded) return <h2>Loading...</h2>

  const {title, author_name, description, price, pages } = pickedBook
  return (
    <div className='listerPosition fontcolor'>
      <h1>BookDetail</h1>
      <li>Title: {title}</li>
      <li>Author: {author_name}</li>
      <li>Description: {description}</li>
      <li>Price: ${price}</li>
      <li>Pages: {pages}</li>
      <br></br>
      <button className="deleteButton">
      {/* onClick={handleDelete} */}
        Delete
      </button>
      <br></br>
      <button
        className="backButton"
        onClick={() => history.push("/books")}>
        Back
      </button>
    </div>
  )
}

export default BookDetail;
