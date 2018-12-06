import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import AddBook from './components/AddBook'
import Book from './components/Book'
import EditBook from './components/EditBook'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/addNewBook' component={AddBook} />
            <Route exact path='/:post_id' component={Book} />
            <Route exact path='/edit/:edit_id' component={EditBook} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
