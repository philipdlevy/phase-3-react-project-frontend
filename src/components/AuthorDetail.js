import React, { useState, useEffect  } from "react"
import {useParams, useHistory} from "react-router-dom"

function AuthorDetail({ authors }) {
  const [pickedAuthor, setPickedAuthor] = useState({
    name: "", 
    books: []
  })
  const [isLoaded, setIsLoaded] = useState([])
  console.log("author", pickedAuthor)


  const history = useHistory();
  let {id} = useParams()

  useEffect(() => {
    console.log("inside", pickedAuthor)
    // debugger
    console.log("authors", authors)
    const author = authors.find((foundAuthor => foundAuthor.id == id))
    setPickedAuthor(author)
    setIsLoaded(true)
  }, [authors])

  const displayedAuthorsBooks = pickedAuthor.books.map((book) => {
    return <li className='fontcolor' key={book.
    id}>{book.title}</li>
  })


  return (
    <div className='listerPosition fontcolor'>
        <h2 className='fontcolor fixedPosition underline'>Author Info</h2>
        <li>Author name: {pickedAuthor.name}</li>
        <br></br>
        <h2 className="underline">Authors books in your list</h2>
        {displayedAuthorsBooks}
        <button
          onClick={() => history.push("/authors")}>
          Back to Authors
        </button>
    </div>
  )
}

export default AuthorDetail;