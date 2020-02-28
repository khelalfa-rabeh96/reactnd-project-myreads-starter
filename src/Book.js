import React from 'react';
import PropTypes from 'prop-types'

import ShelfChanger from './ShelfChanger';

const Book = (props) => {

  // Destructuring  props' values
  const {book} = props;

 
  // This function will call the parent Callback to change a book 
  // Depend on the new shelf that it will be on
  const changeCurrentShelf = (shelf) => {
    props.onMoveBook(book.id, shelf)
  }

  return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.cover_url})` }}></div>
          <ShelfChanger onChangeCurrentShelf={changeCurrentShelf} shelf={book.shelf}/>
        </div>

        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    )
}

Book.propTypes={
  book: PropTypes.object.isRequired,
  onMoveBook: PropTypes.func.isRequired,
}

export default Book;