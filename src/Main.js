import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Link } from 'react-router-dom'
import BookshelfStyle from './BookshelfStyle.js'

class Main extends React.Component {
  render() {
    return (
      <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <BookshelfStyle  bookList={ this.props.books.currentlyReading } changeBookShelf={ this.props.changeBookShelf } />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <BookshelfStyle bookList={ this.props.books.wantToRead } changeBookShelf={ this.props.changeBookShelf } />
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <BookshelfStyle bookList={ this.props.books.read } changeBookShelf={ this.props.changeBookShelf } />
              </div>
            </div>
          </div>
          <div className="open-search">
            <Link  to="/search">Add a book</Link>
            {
              /*这里的href必须要加#才能保证页面正确跳转，这是为什么*/
            }
          </div>
      </div>
    )
  }
}

export default Main
