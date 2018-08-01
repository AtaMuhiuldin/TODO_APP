import {Component} from 'react';
import React from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import {loginUser} from '../actions';
class NavBar extends Component
{   
    render(){
        return( 
        <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md  navbar-light bg-light">
                <Link className="navbar-brand" to="/">
                    <img src="https://i.vimeocdn.com/portrait/9798022_300x300" width="100" height="100" alt=""/>
                    My TOdO 
                </Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  
                
                            <Link className="nav-item nav-link" to="/register">
                                Register
                            </Link>
                     
                            <Link className="nav-item nav-link" to="/login">
                                Login
                            </Link>
                            <Link className="nav-item nav-link" to="/login">
                                Login
                            </Link>

                            <Link className="nav-item nav-link" to="/collection">
                                My Todo
                            </Link>

                              <Link onClick={this.logoutUser} className="nav-item nav-link" to="/login">
                                Log out
                             </Link>
                        
                </div>
              
               
                
               

            </nav>
        </React.Fragment> 
        );
    }

    logoutUser = () =>{
        this.props.loginUser(false);
    }
}



export default connect(null, {loginUser}) (NavBar);

