import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar';
import HomePage from './HomePage';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import BookLister from './BookLister';
import AuthorLister from './AuthorLister';


function App() {
  const [books, setBooks] = useState([])
  console.log("books", books)

  useEffect(() => {
    fetch("http://localhost:9292/books")
    .then((resp) => resp.json())
    .then((books) => setBooks(books))
    .catch((error) => alert(error)) 
  }, [])


  return (
    <div className="bg">
      <NavBar />
      <Switch>

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/books"> 
        <BookLister books={books}/>
      </Route> 

      <Route exact path="/books/new">  
        <AddBook />
      </Route>

      <Route exact path="/books/:id"> 
        <BookDetail />
      </Route>

      <Route exact path="/authors"> 
        <AuthorLister />
      </Route>    

      <Route>
        <h1 className='fontcolor' style={{textAlign: "center"}}>
          <strong>404</strong>
          <h3 className='fontcolor'><strong>ERROR! PAGE NOT FOUND!</strong></h3>
        </h1>
      </Route>

      </Switch>
    </div>
  );
}

export default App;
