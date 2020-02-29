import React from 'react'
import PropTypes from 'prop-types'

import BooksGrid from './BooksGrid';
const BookShelf = (props) => {

	// Destructuring  props' values
	const  {books, shelf, onMoveBook } = props;

	// get the only books that match the shelf
	const booksUponShelf = books.filter((book) => book.shelf === shelf);

	return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf}</h2>
			<div className="bookshelf-books">
				<BooksGrid books={booksUponShelf} onMoveBook={onMoveBook} />
			</div>
		</div>
	)
}

BookShelf.propTypes={
	books: PropTypes.array.isRequisred,
	shelf: PropTypes.string.isRequired,
	onMoveBook: PropTypes.func.isRequired,
}

export default BookShelf;