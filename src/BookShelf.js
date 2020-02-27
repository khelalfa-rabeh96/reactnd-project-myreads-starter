import React from 'react'

import Book from './Book';

const BookShelf = (props) => {
	const  {books, shelf} = props;
	return(
		<div className="bookshelf">
			<h2 className="bookshelf-title">{shelf}</h2>
			<div className="bookshelf-books">
				<ol className="books-grid">

				{books.map((book) => (
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