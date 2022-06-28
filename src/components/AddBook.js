import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function AddBook() {
  const [titleData, setTitleData] = useState("")
  const [authorData, setAuthorData] = useState("")
  const [descriptionData, setDescriptionData] = useState("")
  const [priceData, setPriceData] = useState("")
  const [pagesData, setPagesData] = useState("")

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault()
  

    if (titleData.trim() == "" || authorData.trim() == "" || descriptionData.trim == "" || descriptionData.trim() == "" || priceData.trim() == "" || pagesData.trim() == "") {
      return alert("Missing Data")
    }

    const newBookData = {
      title: titleData, 
      author_name: authorData, 
      description: descriptionData, 
      price: priceData, 
      pages: pagesData
    };

    fetch("http://localhost:9292/books", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
        }, 
        body: JSON.stringify(newBookData), 
      })
      .then((resp) => resp.json())
      .then(history.push("/books"))
      .catch((error) => alert(error));
  }


  return (
    <div>
      <h1 className='fontcolor, addBookStyling'>Add a new book</h1>

      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
        <label className='fontcolor'>Title</label>
        <input 
        className='formLook'
        value={titleData}
        type="text" 
        name="title"
        onChange={(e) => setTitleData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Author</label>
        <input 
        className='formLook'
        value={authorData}
        type="text" 
        name="author_name"
        onChange={(e) => setAuthorData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Description</label>
        <input 
        className='formLook'
        value={descriptionData}
        type="text" 
        name="description"
        onChange={(e) => setDescriptionData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Price</label>
        <input 
        className='formLook'
        value={priceData}
        type="text" 
        name="price"
        onChange={(e) => setPriceData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Pages</label>
        <input 
        className='formLook'
        value={pagesData}
        type="text" 
        name="pages"
        onChange={(e) => setPagesData(e.target.value)}
        /><br/>
        <input type="submit" className='formLook'></input>
      </form>
    </div>
  )
}

export default AddBook;
