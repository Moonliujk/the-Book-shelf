import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'

import Main from './Main'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        console.log(books);
        this.setState({currentlyReading: books.filter((book) => book.shelf === "currentlyReading")});
        this.setState({wantToRead: books.filter((book) => book.shelf === "wantToRead")});
        this.setState({read: books.filter((book) => book.shelf === "read")});
      })
  }
//get all books' information
  componentDidMount() {
    this.getAllBooks();
  }

  changeBookShelf = (book, shelf) => {
    //if (book.shelf === shelf) return;
    BooksAPI.update(book, shelf)
      .then(() => this.getAllBooks())
  }

  render() {
    return (
      <div className="app">
        <Route
            exact
            path="/"
            render={() => (
              <Main books={ this.state } changeBookShelf={ this.changeBookShelf } />
            )}
        />
        <Route
            path="/search"
            render={() => (
              <Search changeBookShelf={ this.changeBookShelf } />
            )}
        />
      </div>
    )
  }
}

export default BooksApp
