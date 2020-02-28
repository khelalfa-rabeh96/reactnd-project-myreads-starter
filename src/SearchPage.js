import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import SearchBookInput from './SearchBookInput';

class SearchPage extends Component {
	render(){
		return(
			 <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={this.props.onShowSearchPage}>Close</button>
              <SearchBookInput />
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
		)
	}
}

export default SearchPage;