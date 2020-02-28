import React, { Component }  from 'react';
import PropTypes from 'prop-types'

class ShelfChanger extends Component {

	static propTypes = {
		onChangeCurrentShelf: PropTypes.func.isRequired,
		shelf: PropTypes.string.isRequired,
	}

	state = {
		selected:"",
	}

	componentDidMount = () => {
		this.setState(() => ({
			selected: this.props.shelf,
		}))
	}

	// Handle the select option and 
	// Call the parent call back to change the book shelf
	hendleSelectShelf = (event) => {
	    const shelf = event.target.value;
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