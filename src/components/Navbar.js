import React, { Component } from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import {searchBook} from '../actions/searchActions'


class Navbar extends Component {
  handleOnClick = () => {
    this.props.findBook('');
  }

  render(){
  return (
    <nav className="navbar navbar-expand-sm navbar-light">
      <div className="container">
          <Link className="navbar-brand text-light" to="/"><i className="fas fa-book mr-2"></i>Bookstore</Link>
          <ul className="navbar-nav texy-center">
            <li className="nav-item mx-2"><NavLink className="nav-link text-light p-2 text-center" exact to='/'>Booklist</NavLink></li>
            <li className="nav-item mx-2 "><NavLink className="nav-link text-light p-2 text-center" to='/addNewBook' onClick={this.handleOnClick}>Add new book</NavLink></li>
          </ul>
      </div>
    </nav> 
  )
}
}

const mapDispatchToProps = (dispatch) => {
  return {
    findBook: (word) => dispatch(searchBook(word))
}
}

export default withRouter (connect(null, mapDispatchToProps)(Navbar))
