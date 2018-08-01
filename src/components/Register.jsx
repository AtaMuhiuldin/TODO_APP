import {Component} from 'react';
import React from 'react';
import {actionAuth} from '../actions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';



class Register extends Component
{

    constructor(){
        super();
       
    }

    state = {

        user:{
            email: '', 
            password: ''
        }

      
    }




    render(){

        const {user} = this.props.auth;
      
        return(
            <div  className="col-md-4" style={{"margin":"auto", "background":"#fff", "padding": "50px", "boxShadow":"5px 5px 5px"}}>
                    <h1 style={{"color": "#05396B"}}>Registration Here</h1>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" onChange={(e) => this.state.user.email = e.target.value}  id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" onChange={(e) => this.state.user.password = e.target.value} id="exampleInputPassword1" placeholder="Password"/>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button onClick={this.submitUser }  className="btn btn-primary">Submit</button>
                    

            </div>
        );
    }

    

   
    submitUser = () =>{
        this.props.actionAuth(this.state.user);
        this.props.history.push("/login");   
    }
    

}
Register.propTypes = {
    actionAuth: PropTypes.func.isRequired, 
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, {actionAuth})(Register);