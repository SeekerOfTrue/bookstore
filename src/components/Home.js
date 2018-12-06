import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Search from './Search'
import BookImg from '../img/book.png'
import {searchBook} from '../actions/searchActions'


class Home extends Component {

  handleOnClick = () => {
    this.props.findBook('');
  }

  render(){
    const { books } = this.props
    const booklist = books.length ? (
      books.map(book => {
        return (
            <Link className="bookOnList" onClick={this.handleOnClick} key={book.id} style={{ textDecoration: 'none' }} to={'/' + book.id}>
              <img src={BookImg} alt="A book" />
              <div className="text-center mainInfo">
                <h4>{book.title}</h4>
                <p>by {book.author}</p>
              </div>
            </Link>
        )
      })
    ) : (
      <div className="text-center text-light noBooks">
        <h2>No books to show</h2>
      </div>
    );

    return (
      <div>
        <Search/>
        <div className="booklist container mt-3">
            {booklist}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.booklist.books.filter(book => JSON.stringify(book).toLowerCase().includes(state.filter))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findBook: (word) => dispatch(searchBook(word))
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)