import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function AddBook() {
  return (
    <div>
      <h1 className='fontcolor' style={{textAlign:"center"}}>Add a new book</h1>

      <form style={{display:"flex", flexDirection:"column", width:"400px", margin:"auto"}}>
        <label className='fontcolor'>Title</label>
        <input 
        // value={exerciseData}
        type="text" 
        name="title"
        // onChange={(e) => setExerciseData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Author</label>
        <input 
        // value={exerciseData}
        type="text" 
        name="author"
        // onChange={(e) => setExerciseData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Description</label>
        <input 
        // value={exerciseData}
        type="text" 
        name="description"
        // onChange={(e) => setInfoData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Price</label>
        <input 
        // value={exerciseData}
        type="text" 
        name="price"
        // onChange={(e) => setExerciseData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Pages</label>
        <input 
        // value={exerciseData}
        type="text" 
        name="pages"
        // onChange={(e) => setExerciseData(e.target.value)}
        /><br/>
        <label className='fontcolor'>Image URL</label>
        <input 
        // value={imageData}
        type="text" 
        name="image" 
        // onChange={(e) => setImageData(e.target.value)}
        /><br/>
        <input type="submit"></input>
      </form>
    </div>
  )
}

export default AddBook;
