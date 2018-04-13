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
    books: [];
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        //console.log(books);
        this.setState({books: books});
      })
  }
//get all books' information
  componentDidMount() {
    this.getAllBooks();
  }

//只调用一次后台数据更新，前端页面数据更新由以下代码完成
  changeBookShelf = (book, shelf) => {
    //if (book.shelf === shelf) return;
    BooksAPI.update(book, shelf)
      .then(
        this.setState(prevState => {
          let newBooks;

          const restOfBooksInShelf = prevState.books.filter(
            preBook => preBook.id !== book.id
          );
          console.log("the restOfBooksInShelf is ", restOfBooksInShelf);
          if (shelf !== "none") {
            book.shelf = shelf;
            newBooks = restOfBooksInShelf.concat([book]);
          } else {
            newBooks = restOfBooksInShelf;
          }
          console.log("the lastest booklist is ", newBooks);
          return {
            books: newBooks
          };
        })
      );
  }

  render() {
    return (
      <div className="app">
        <Route
            exact
            path="/"
            render={() => (
              <Main books={ this.state.books } changeBookShelf={ this.changeBookShelf } />
            )}
        />
        <Route
            path="/search"
            render={() => (
              <Search books={ this.state.books } changeBookShelf={ this.changeBookShelf } />
            )}
        />
      </div>
    )
  }
}

export default BooksApp
