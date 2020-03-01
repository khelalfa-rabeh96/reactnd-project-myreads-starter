import React from 'react'
import {Route} from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage';
import ListBooks from './ListBooks';


class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }
  
  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
       this.setState(() => ({
          books: books
        }))
      })
    
  }
  
  showSearchPage = () => {
    this.setState(() =>({
      showSearchPage:false
    }))
  }

  // This method will move a book from a shelf to another one 
  // By update the shelf property or delete it in case 
  // If it's not on any shelf 
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf);
    if(shelf === 'none'){
      this.deleteBook(book)
    }else{
      book.shelf = shelf;
      this.setState((prevState) => ({
        books: prevState.books.filter(b => b.id !== book.id).concat(book)
      }))
    }
    console.log(this.state.books);
  }

  // This method use to delete the book  in case if user select None Option 
  // From the option list of the book
  deleteBook = (book) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((b) => b.id !== book.id)
    }))
  }

  render() {
    console.log(this.state.books);
    return (
      <div className="app">
       
          <Route  path="/search" render={() => (
             <SearchPage  onMoveBook={this.moveBook} books={this.state.books}/> 
           )}/> 
          

          <Route exact path="/" render={() => (
             <ListBooks  onMoveBook={this.moveBook} books={this.state.books}/> 
           )}/>
          
        
      </div>
    )
  }
}

export default BooksApp
