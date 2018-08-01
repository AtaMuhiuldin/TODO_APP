import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store'; 

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Register from './components/Register';
import NavBar from './components/navBar';
import Login from './components/login';
import HomePage from './components/homePage';
import AdminPage from './components/adminPage';
import TodoCollection from './components/todoCollection';

class App extends Component {

  state = {
    cmpPath: '/'
  }

  render() {
    return (
      <Router>
        <Provider store = {store}>
          <div className="App">
              <NavBar/>
              {/* {store.getState().auth.isAuthenticated? <AdminPage/> : <Home>} */}
              <Route exact path="/" component={HomePage} />
              <Route exact path="/register" component = {Register} />
              <Route exact path="/login" component = {Login}/>
              <Route exact path="/admin" component = {AdminPage}/>
              <Route exact path="/collection" component = {TodoCollection}/>
              {/* {console.log("Main Store " ,store)}

              {store.subscribe(() =>{console.log("MyStore", store.getState())})} */}
               {/* {store.subscribe(() => { store.getState().auth.isAuthenticated ? this.getAdminPage: <HomePage/> })} */}
              {/* {store.auth.isAuthenticated === true ? this.getAdminPage: <HomePage/> } */}
          </div>
        </Provider>
      </Router>
    );
  }

  getAdminPage = () =>{
    return(
      <Route exact path="/adminPage" component = {AdminPage}/>
    );
  }

  
}

export default App;
