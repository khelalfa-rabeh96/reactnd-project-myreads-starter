import React from 'react'
import BookShelf from './BookShelf';
import {Link} from 'react-router-dom'

const ListBooks = (props) => {
	const {books, onMoveBook} = props;
	const shelves = [
     			 {key:"currentlyReading", value:"Currently Reading"},
     			 {key:"wantToRead", value:"Want To Read"},
     			 {key:"read", value:"Read"},
 			 ];
	return(
		<div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    {/* Pass books to can filter the books ,
                        each for it's shelf with book's shelf property 
                        and BookShelf's shelf prop 

                        Pass a changeBookShelf method as a prop to can
                        Update a specific book that on the other hand will 
                        Update the state from the childs components
                    */}
                    {shelves.map(shelf => (
                    	 <BookShelf books={books} shelf={shelf} onMoveBook={onMoveBook}/>
                    	))}

                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search"><button>Add a book</button></Link>
                </div>
       </div>
	)
}

export default ListBooks;