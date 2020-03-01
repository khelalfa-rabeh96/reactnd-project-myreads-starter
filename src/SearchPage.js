import React, { Component }  from 'react';
import {Link} from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import SearchBookInput from './SearchBookInput';
import BooksGrid from './BooksGrid';

class SearchPage extends Component {

	state = {
		booksHaveShelfs: [],
		searchResults:[],
		allBooks: [],
	}

	componentDidMount(){
		this.setState(() => ({
			booksHaveShelfs: this.props.books
		}))
	}

	handleSearch = (query) => {
		console.log("query: ",query)
		// Check if the input field has no value
		// If not then pass the search filed value to the search method
		if(query.trim().length > 0){
			BooksAPI.search(query.trim()).then(books => {
				console.log("results books : ",books)
				// If no the request throw an error
				// Pass an empty array to catch the error
				if(books.error){
					this.setState(() => ({
						searchResults: []
					}));
				}else{
					this.setState(() => ({
						searchResults: books
					}));

				}
				this.mixingBooks();	
			});
		// Pass and empty array
		}else{
			this.setState(() => ({
					searchResults: [],
					allBooks: [],
				}));
		}

		
	}

	// search for a book in a set in books
	isBookExist = (books, book) => {
		return books.filter(b => b.id === book.id);
	}

	// Mix our result search with our books that already have shelfs
	// That  will allow us to know the books that are in the serach results
	// if it's already have a shelf 
	 
	mixingBooks = () => {

		const {booksHaveShelfs, searchResults} = this.state;
		const mixedBooks = searchResults.map((b) => {	
			const targetBook = this.isBookExist(booksHaveShelfs, b) ;
			return targetBook.length >0 ? targetBook[0] : b; 
		})

		this.setState(() => ({
			allBooks: mixedBooks
		}))
		
		
	}

	render(){
		console.log("all books : ",this.state.allBooks)
		return(
			 <div className="search-books">
            <div className="search-books-bar">
              <Link to="/"><button className="close-search" >Close</button></Link>
          	  <SearchBookInput onHandleSearch={this.handleSearch}/>
            </div>
            <div className="search-books-results">
              <BooksGrid books={this.state.allBooks}  onMoveBook={this.props.onMoveBook}/>
            </div>
          </div>
		)
	}
}

export default SearchPage;