import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './HomePage';
// import Navigation from './Navigation';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import BookLister from './BookLister';

function App() {
  return (
    <div className="bg">
      <Switch>
      {/* <Navigation />  */}
      <Route exact path="/">
        <HomePage />
      </Route>

      <Route exact path="/books"> 
        <BookLister />
      </Route> 

      <Route exact path="/books/new">  
        <AddBook />
      </Route>

      <Route exact path="/books/:id"> 
        <BookDetail />
      </Route>

      <Route>
        <h1 style={{textAlign: "center"}}>
          <strong>404</strong>
          <h3><strong>ERROR! PAGE NOT FOUND!</strong></h3>
        </h1>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
