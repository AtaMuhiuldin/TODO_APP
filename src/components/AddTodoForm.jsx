import React, {Component} from 'react';
import {addTodo} from '../actions/todoActions';
import {connect} from 'react-redux';
import Todo from '../Todo';

class AddTodoForm extends Component
{

	state ={
		inputValue: ''

	}
	render(){
		return(
			<div class="form-inline">
			  <div class="form-group mb-2">
			    <label for="staticEmail2" class="sr-only"></label>
			    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="Enter Task"/>
			  </div>
			  <div class="form-group mx-sm-3 mb-2">
			    <label for="" class="sr-only"></label>
			    <input onChange={this.handleInput} require type="text" ref="txtData" class="form-control" 
			    id="" placeholder="Task Name"
			    value={this.state.inputValue}
			    />
			  </div>
				<button 	onChange={(e) =>{this.state.inputValue = e.target.value }} 
									onClick={ this.addTodoItem} 
									class="btn btn-primary mb-2">Add Task</button>
			</div>
			);
	}

	addTodoItem = () =>{
		this.props.addTodo(new Todo(1, this.state.inputValue ));
		
	}

	handleInput = (e) =>{
		this.setState({inputValue:e.target.value});
	}
}

const mapStateToProps = (state) => ({
	todoCount: state.todoCount,
	todo: state.todo
});


export default connect(mapStateToProps, {addTodo})(AddTodoForm);
