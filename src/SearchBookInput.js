import React, { Component }  from 'react';
import PropTypes from 'prop-types';

class SearchBookInput extends Component {

	static propTypes = {
		onHandleSearch: PropTypes.func.isRequired,
	}

	state = {
		query: '',
	}

	handleChange = (event) => {
		
		// Get the search term and then send it  back
		// To the search page component with the onHandleSearch callback
		// To let the search page handle the results of this term
		const query = event.target.value;
		this.setState(() => ({query:query}));
		this.props.onHandleSearch(event.target.value);
	}
	render(){
		return(
			<div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                	type="text" 
					placeholder="Search by title or author"
					valeu={this.state.query}
					onChange={this.handleChange}/>

              </div>
		)
	}
}

export default SearchBookInput;