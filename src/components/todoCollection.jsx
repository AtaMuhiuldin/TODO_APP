import React, {Component} from 'react';
import TodoTask from './todoTask';
import {connect} from 'react-redux';
import { addTodo } from '../actions/todoActions';
import AddTodoForm from './AddTodoForm';

class todoCollection extends Component
{
	render(){

		{this.props.auth.isAuthenticated ? "":  this.props.history.push("/login") }	

		return(
				<div>
					
                      <AddTodoForm/>
					  {console.log("Testing Data", this.props.todo.todoList)}
					{this.props.todo.todoList.map(task => <TodoTask key={task.id} mTodoTask={task} ><span>Product</span></TodoTask>) }
				</div>
			);
	}
}

const mapStateToProps = (state) =>({
	todo: state.todo, 
	auth: state.auth
});
export default connect(mapStateToProps, {addTodo})(todoCollection);