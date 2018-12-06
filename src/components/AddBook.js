import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNewBook } from '../actions/addBookActions'

class AddBook extends Component {

state = {
  id: "",
  title: "",
  author: "",
  body: ""
}

handelChange = (e) => {
  let id = Date.now().toString();
  this.setState({
    id : id,
    [e.target.id]: e.target.value
  })
}

handleClick = () => {
  if(!this.state.title || !this.state.author || !this.state.description){
    alert('The fields cant be empty')
    return false;
  } else {
    this.props.addNewBook(this.state);
    this.setState({
      id: "",
      title: "",
      author: "",
      description: ""
    })
    this.props.history.push('/');
  }
}

render() {
  return (
    <div className="container col-lg-6 col-md-6 col-9 mt-5 bg-dark p-3 shadow rounded-top">
      <label className="col-form-label text-light font-weight-bold">Title:</label>
      <input onChange={this.handelChange} id="title"  className='form-control' value = {this.state.title} type="text"/>

      <label className="col-form-label text-light font-weight-bold">Author:</label>
      <input onChange={this.handelChange} id="author" className='form-control' value = {this.state.author} type="text"/>

      <label className="col-form-label text-light font-weight-bold">Description:</label>
      <textarea onChange={this.handelChange} id="description" className='form-control' value = {this.state.description} type="text"/>
      
      <button onClick={this.handleClick} className='btn btn-warning mt-2 p-2 font-weight-bold d-block mx-auto'>Add</button>
    </div>
  )
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewBook: (newBook) => dispatch(addNewBook(newBook))
  }
}

export default connect(null, mapDispatchToProps)(AddBook)


