import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import BookShelf from './BookShelf';

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [
      { 
        id:1,
        title:"To Kill a Mockingbird",
        author: "Harper Lee",
        cover_url:"http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api", 
        shelf: "currentlyReading"
      },
      { 
        id:2,
        title:"Ender's Game",
        author: "Orson Scott Card",
        cover_url:"http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api", 
        shelf: "wantToRead",
      },

      { 
        id:3,
        title:"1776",
        author: "David McCullough",
        cover_url: "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",  
        shelf: "read",
      },
    ]
  }

  // This method will move a book from a shelf to another one 
  // By update the shelf property or delete it in case 
  // If it's not on any shelf 
  moveBook = (bookId, shelf) => {
    if(shelf === 'none'){
      this.deleteBook(bookId)
    }else{
      this.setState((prevState) => ({
        books: prevState.books.filter((book) => {
          return book = book.id === bookId ? (book.shelf = shelf) : book;
        })
      }))
    }
  }

  // This method use to delete the book  in case if user select None Option 
  // From the option list of the book
  deleteBook = (bookId) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((book) => book.id !== bookId)
    }))
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
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
                <BookShelf books={this.state.books} shelf={"currentlyReading"} onMoveBook={this.moveBook}/>
                <BookShelf books={this.state.books} shelf={"wantToRead"} onMoveBook={this.moveBook}/>
                <BookShelf books={this.state.books} shelf={"read"} onMoveBook={this.moveBook}/>
                
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
