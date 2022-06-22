import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function AddBook() {
  const [titleData, setTitleData] = useState("")
  // console.log("title", titleData)
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
      <h1 className='fontcolor' style={{textAlign:"center"}}>Add a new book</h1>

      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
        <label className='fontcolor'>Title</label>
        <input 
        value={titleData}
        type="text" 
        name="title"
        onChange={(e) => setTitleData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Author</label>
        <input 
        value={authorData}
        type="text" 
        name="author_name"
        onChange={(e) => setAuthorData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Description</label>
        <input 
        value={descriptionData}
        type="text" 
        name="description"
        onChange={(e) => setDescriptionData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Price</label>
        <input 
        value={priceData}
        type="text" 
        name="price"
        onChange={(e) => setPriceData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Pages</label>
        <input 
        value={pagesData}
        type="text" 
        name="pages"
        onChange={(e) => setPagesData(e.target.value)}
        /><br/>
        {/* <label className='fontcolor'>Image URL</label>
        <input  */}
        {/* // value={imageData}
        // type="text" 
        // name="image" 
        // onChange={(e) => setImageData(e.target.value)}
        // /><br/> */}
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default AddBook;
