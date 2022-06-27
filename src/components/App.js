import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'

import NavBar from './NavBar';
import HomePage from './HomePage';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import BookLister from './BookLister';
import AuthorLister from './AuthorLister';
import AuthorDetail from './AuthorDetail';


function App() {
  const [books, setBooks] = useState([])
  const [authors, setAuthors] = useState([])
  const [toggleBook, setToggleBook] = useState(false)

  useEffect(() => {
    fetch("http://localhost:9292/authors")
    .then((resp) => resp.json())
    .then((authors) => {
      setAuthors(authors)
    })
    .catch((error) => alert(error)) 
    
    fetch("http://localhost:9292/books")
    .then((resp) => resp.json())
    .then((books) => setBooks(books))
    .catch((error) => alert(error)) 
  }, [toggleBook])


  // useEffect(() => {
  //   fetch("http://localhost:9292/authors")
  //   .then((resp) => resp.json())
  //   .then((authors) => setAuthors(authors))
  //   .catch((error) => alert(error)) 
  // }, [])

  function onDeleteBook(id) {
    const updatedBookArray = books.filter(book => book.id != parseInt(id))
    setBooks(updatedBookArray)
    // console.log("books", books)
}


  return (
    <div className="bg">
      <NavBar />
      <Switch>

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/books"> 
        <BookLister books={books} />
      </Route> 

      <Route exact path="/books/new">  
        <AddBook />
      </Route>

      <Route path="/books/:id"> 
        <BookDetail books={books} onDeleteBook={onDeleteBook} toggleBook={toggleBook} setToggleBook={setToggleBook}/>
      </Route>

      <Route exact path="/authors"> 
        <AuthorLister authors={authors}/>
      </Route>    

      <Route path="/authors/:id"> 
        <AuthorDetail authors={authors}/>
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
