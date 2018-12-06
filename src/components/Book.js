import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteBook } from '../actions/deleteBookActions'

class Book extends Component {

  handleDelete = () => {
    this.props.deleteBook(this.props.book.id);
    this.props.history.push('/');
  }

  handleEdit = () => {
    this.props.history.push('/edit/' + this.props.book.id);
  }

  render() {
    const { book } = this.props
    const bookInfo = book ? (
      <div className="card mt-5 border border-dark rounded shadow-lg">
        <div className="card-header text-center">
          <h4 className="text-center font-weight-bold">{book.title}</h4>
          <p className="text-center font-italic">by {book.author}</p>
        </div>
        <div className="card-body">
          <p className="card-text">{book.description}</p>
          <div className="row justify-content-around">
            <button className="btn btn-secondary" onClick={this.handleEdit}>Edit book</button>
            <button className="btn btn-danger" onClick={this.handleDelete}>Delete book</button>
          </div>
        </div>
      </div>
    ) : (
      <div className="text-center mt-4">Loading books...</div>
    );

    return (
      <div className="container">
        {bookInfo}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.post_id;
  return {
    book: state.booklist.books.find(post => post.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (id) => dispatch(deleteBook(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Book)
