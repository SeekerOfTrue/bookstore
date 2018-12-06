import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editBook } from '../actions/editBookActions'

class EditBook extends Component {
  
state = {
  id: this.props.book.id,
  title: this.props.book.title,
  author: this.props.book.author,
  description: this.props.book.description
}

handelChange = (e) => {
  this.setState({
    [e.target.id]: e.target.value
  })
}

handleClick = () => {
  this.props.editBook(this.state);
  this.props.history.push('/');
}

render() {
  return (
    <div className="container col-lg-6 col-md-6 col-9 mt-5 bg-dark p-3 shadow rounded-top">
      <label className="col-form-label text-light font-weight-bold">Title:</label>
      <input id="title" onChange={this.handelChange} className='form-control' value = {this.state.title} type="text"/>

      <label className="col-form-label text-light font-weight-bold">Author:</label>
      <input id="author" onChange={this.handelChange} className='form-control' value = {this.state.author} type="text"/>

      <label className="col-form-label text-light font-weight-bold">Description:</label>
      <textarea id="description" onChange={this.handelChange} className='form-control' value = {this.state.description} type="text"/>
      
      <button onClick={this.handleClick} className='btn btn-warning mt-2 p-2 font-weight-bold d-block mx-auto'>Save</button>
    </div>
  )
}
}

const mapStateToProps = (state, props) => {
  let id = props.match.params.edit_id;
  return {
    book: state.booklist.books.find(book => book.id === id)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editBook: (newEditBook) => dispatch(editBook(newEditBook))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBook)
 


