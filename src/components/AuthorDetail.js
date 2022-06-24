import React, { useState, useEffect  } from "react"
import {useParams, useHistory} from "react-router-dom"

function AuthorDetail({ authors }) {
  const [pickedAuthor, setPickedAuthor] = useState({
    name: "", 
    books: []
  })
  const [isLoaded, setIsLoaded] = useState([])
  console.log("the author", pickedAuthor)


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

  return (
    <div className='listerPosition fontcolor'>
        <h2 className='fontcolor fixedPosition'>Authors Books</h2>
        <li>Author name: {pickedAuthor.name}</li>
        <button
          className="backButton"
          onClick={() => history.push("/authors")}>
          Back
        </button>
    </div>
  )
}

export default AuthorDetail;