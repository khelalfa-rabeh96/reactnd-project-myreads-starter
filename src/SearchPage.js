import React, { Component }  from 'react';

import * as BooksAPI from './BooksAPI'

import SearchBookInput from './SearchBookInput';
import BooksGrid from './BooksGrid';

class SearchPage extends Component {

	state = {
		results:[]
	}

	handleSearch = (query) => {

		// Check if the input field has no value
		// If not then pass the search filed value to the search method
		if(query.trim().length > 0){
			BooksAPI.search(query.trim()).then(books => {
				console.log(books)
				// If no the request throw an error
				// Pass an empty array to catch the error
				if(books.error){
					this.setState(() => ({
						results: []
					}));
				}else{
					this.setState(() => ({
						results: books
					}));
				}
				
			});
		// Pass and empty array
		}else{
			this.setState(() => ({
					results: []
				}));
		}	
		
	}


	render(){
		return(
			 <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={this.props.onShowSearchPage}>Close</button>
              {this.state.results && (
              	<SearchBookInput onHandleSearch={this.handleSearch}/>
              	)}
              
            </div>
            <div className="search-books-results">
              <BooksGrid books={this.state.results}  onMoveBook={this.props.onMoveBook}/>
            </div>
          </div>
		)
	}
}

export default SearchPage;