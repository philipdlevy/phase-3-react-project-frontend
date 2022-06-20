import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function HomePage() {
  return (
    <div className="bg">
      <h1 className='welcome'>Welcome!</h1>
      <button className='button1'>HomePage</button>
      <button className='button2'>Add Book</button>
      <button className='button3'>Book List</button>
    </div>
  );
}

export default HomePage;






  // const history = useHistory();

  // default image for newItemData(imageData) image below if none is provided
  // const backupImg = "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482930.jpg"
  
  // function handleSubmit(event) {
  //   event.preventDefault()

    // helps not have an empty form
  //   if (exerciseData.trim() === "" || infoData.trim() === "") {
  //     return alert("Missing Data") 
  //   }

  //   fetch("", {
  //     method: "POST", 
  //     headers: {
  //       "Content-Type": "application/json"
  //     }, 
  //     body: JSON.stringify(), 
  //   })
  //   .then((resp) => resp.json())
  //   .then(history.push("/exercises"))
  //   .catch((error) => alert(error));
  // }

