import React from 'react'
import { Link } from 'react-router-dom'
import BookshelfStyle from './BookshelfStyle.js'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
  state = {
    searchResults: []
  };

  searchBooks = (query) => {
    let searchTxt = query.trim();
    //console.log(searchTxt);
    if (searchTxt.length > 0) {
      BooksAPI.search(searchTxt)
        .then((books) => {
          if (books.length > 0) {
            this.setState((prevState, prevProps) => {
              // prevProps.books 书架上已存在的书会修改书架属性
              const shelfBooks = prevProps.books;

              const newSearchBooks = books.map(searchBook => {

                const searchBookInshelfBook = shelfBooks.find(
                  shelfBook => shelfBook.id === searchBook.id
                );

                return {
                  //ES6spread语法，将对象解构
                  ...searchBook,
                  shelf: searchBookInshelfBook
                    ? searchBookInshelfBook.shelf
                    : "none"
                };
              });

              return {
                searchResults: newSearchBooks
              };
            });

          } else {
            console.log("没有返回查询结果！");
          }
        })
        .catch(() => console.log("没有返回查询结果！"))
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" onChange={(e) => this.searchBooks(e.target.value)} />

          </div>
        </div>
        <div className="search-books-results">
          <BookshelfStyle bookList={ this.state.searchResults } changeBookShelf={ this.props.changeBookShelf } />
        </div>
      </div>
    )
  }
}

export default Search
