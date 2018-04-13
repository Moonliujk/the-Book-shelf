import React from 'react'
import './App.css'


function BookshelfStyle(props) {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.bookList.map((item, index) => (
              <li key={ index }>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={ { width: 128, height: 193, backgroundImage: `url(${item.imageLinks ? item.imageLinks.thumbnail : 'src/icon/no image.png'})`} }></div>
                    <div className="book-shelf-changer">
                      <select value={ item.shelf||"nothing" } onChange={ (e) => props.changeBookShelf(item, e.target.value) }>
                        <option value="nothing" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{ item.title ? item.title : '暂无详细信息' }</div>
                  <div className="book-authors">{ item.authors ? item.authors[0] : '暂无详细信息' }</div>
                </div>
              </li>
          ))}
        </ol>
      </div>
    )
}

export default BookshelfStyle
