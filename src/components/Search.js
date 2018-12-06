import React, { Component } from 'react'
import { connect } from 'react-redux'
import {searchBook} from '../actions/searchActions'

class Search extends Component {

handelChange = (e) => {
  this.props.findBook(e.target.value.toLowerCase());
}

render() {
    return (
      <div className="container bg-dark col-6 mx-auto shadow rounded p-3 m-3">
        <input onChange={this.handelChange} placeholder='Search...'  className='form-control' type="text"/>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      findBook: (word) => dispatch(searchBook(word))
  }
}
  
export default connect(null, mapDispatchToProps)(Search)