import React from 'react';
import PropTypes from 'prop-types'

import ShelfChanger from './ShelfChanger';

const Book = (props) => {

  // Destructuring  props' values
  const {book} = props;

 

  const changeCurrentShelf = (shelf) => {
    props.onChangeBookShelf(book.id, shelf)
  }

  return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.cover_url})` }}></div>
          <ShelfChanger onChangeCurrentShelf={changeCurrentShelf}/>
        </div>

        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.author}</div>
      </div>
    )
}

Book.propTypes={
  book: PropTypes.object.isRequired,
  onChangeBookShelf: PropTypes.func.isRequired,
}

export default Book;