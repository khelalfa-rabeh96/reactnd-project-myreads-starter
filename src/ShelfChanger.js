import React, { Component }  from 'react';
import PropTypes from 'prop-types'

class ShelfChanger extends Component {

	static propTypes = {
		onChangeCurrentShelf: PropTypes.func.isRequired,
		shelf: PropTypes.string,
	}

	state = {
		selected:"",
	}

	componentDidMount = () => {
		// Check if the book has a shelf put it as the selected value
		// none instead
		const shelf = this.props.shelf ? this.props.shelf : 'none';
		if(shelf){
			this.setState(() => ({
				selected: shelf ,
			}))
		}		
	}

	// Handle the select option and 
	// Call the parent call back to change the book shelf
	hendleSelectShelf = (event) => {
	    const shelf = event.target.value;
	    this.setState({selected: shelf});
	    this.props.onChangeCurrentShelf(shelf);
	}

	render(){
		return (
			<div className="book-shelf-changer">
	            <select onChange={this.hendleSelectShelf} value={this.state.selected} >
	              <option value="move" disabled>Move to...</option>
	              <option value="currentlyReading">Currently Reading</option>
	              <option value="wantToRead">Want to Read</option>
	              <option value="read">Read</option>
	              <option value="none">None</option>
	            </select>
			</div>
			)
	}
}

export default ShelfChanger;