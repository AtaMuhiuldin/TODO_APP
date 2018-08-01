import {Component} from 'react';
import React from 'react';
import {Link} from 'react-router-dom';
import {connect } from 'react-redux';
import {loginUser} from '../actions';

class Login extends Component
{

    state={
        email: '', 
        password: '',
        error:''
    }

    render(){
       
      
        return( 
        <div className="col-sm-7" style={{"margin": "auto", "background":"#fff" ,"padding": "100px", "boxShadow": "10px 10px 10p"}}>


            <div className="form-inline">
                    <div className="form-group mb-2">
                        <label for="staticEmail2" className="sr-only">Email</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        id="staticEmail2" 
                        placeholder="example@mail.com"
                        onChange={(e) =>{this.state.email = e.target.value } }
                        />
                    </div>
                    <div className="form-group mx-sm-3 mb-2">
                        <label for="inputPassword2" className="sr-only">Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputPassword2" 
                            placeholder="Password"
                            onChange={(e) =>{this.state.password = e.target.value } }
                            />
                    </div>
                    <button onClick={this.authenticateUser}  className="btn btn-primary mb-2">Login</button>
                    <span className="badge badge-warning">{this.state.error}</span>
                </div>
        </div>   
        );
    }

    authenticateUser = () =>{
      
        if(this.props.auth.user.email === undefined)
        {
            this.setState({error: "First Register Youself @Todo Then Login Here !!!"});
            
        }
        else
        {

            if(this.state.password === this.props.auth.user.password && this.state.email === this.props.auth.user.email ){
                this.props.loginUser(true);
                this.props.history.push("/collection");
            }
            else{
                this.setState({error: "Wrong Email, Password"});
            }
        }
      
    }



}

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps, {loginUser})(Login);
