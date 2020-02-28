import React from 'react'
import PropTypes from 'prop-types'

import Book from './Book';

const BooksGrid = (props) => {
	return(
			<ol className="books-grid">

			{/* Map through books to create a Book Component for each book */}
				{props.books.map((book) => (
					<li key={book.id}>
						{/* Pass a book as prop for Book Component
							And pass onChangeBookShelf method that allow us 
							To change witch  shelf a book it's on 
							With the Parent Component Callback 
					    */}
						<Book book={book} onMoveBook={props.onMoveBook}/>
						
					</li>
				))}
				</ol>
		)
}	

BooksGrid.propTypes={
	books: PropTypes.array.isRequired,
	onMoveBook: PropTypes.func.isRequired,
}


export default BooksGrid