import React from 'react';

import HomePage from './HomePage';
import Navigation from './Navigation';
import AddBook from './AddBook';
import BookDetail from './BookDetail';
import BookLister from './BookLister';

function App() {
  return (
    <div className="bg">
      <h1>Hello World!</h1>
      <HomePage />
      <Navigation />
      <AddBook />
      <BookDetail />
      <BookLister />
    </div>
  );
}

export default App;
