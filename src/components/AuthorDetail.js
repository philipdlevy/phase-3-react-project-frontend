import React, { useState, useEffect  } from "react"
import {useParams, useHistory} from "react-router-dom"

function AuthorDetail({ authors }) {
    const [pickedAuthor, setPickedAuthor] = useState(null)
    console.log("the authors", authors)


    // const history = useHistory();
    // let {id} = useParams()

    // useEffect(() => {
    //     fetch(`http://localhost:9292/authors/${id}`)
    //     .then(resp => resp.json())    
    //     .then(authorData => {
    //       setPickedAuthor(authorData)
    //     })
    //     .catch((error) => alert(error));
    //   }, [])

    //   const {name, books } = pickedAuthor
  return (
    <div className='listerPosition'>
        <h2 className='fontcolor fixedPosition'>Authors Books</h2>
        {/* <li>Author name: {name}</li> */}
    </div>
  )
}

export default AuthorDetail;