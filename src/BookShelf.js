import React from 'react'

import Book from './Book';

const BookShelf = (props) => {

	// Destructuring  props' values
	const  {books, shelf} = props;

	// get the only books that match the shelf
	const booksUponShelf = books.filter((book) => book.shelf === shelf);

	return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">

			{/* Map through books to create a Book Component for each book */}
				{booksUponShelf.map((book) => (
					<li>
						<Book book={book}/>
					</li>
				))}
				</ol>
			</div>
		</div>
	)
}

export default BookShelf;