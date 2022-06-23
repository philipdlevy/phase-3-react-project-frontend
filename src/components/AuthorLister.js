import React, { useState, useEffect } from 'react'
import {useHistory} from "react-router-dom"

function AuthorLister() {
    const [authors, setAuthors] = useState([])

    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:9292/authors")
        .then((resp) => resp.json())
        .then((authors) => setAuthors(authors))
    
        .catch((error) => alert(error)) 
      }, [])


      const displayedAuthors = authors.map((author) => {
        return <li className='fontcolor' key={author.id}>{author.name}</li>
      })

  return (
    <div className='fontcolor listerPosition'>
      <h2>Authors</h2>
        {displayedAuthors}
        <br></br>
        <button onClick={() => history.push("/books")}>
            Back to Books
        </button>
    </div>
  )
}


export default AuthorLister;