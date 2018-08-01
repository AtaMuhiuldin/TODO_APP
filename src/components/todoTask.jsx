import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo , deleteTodo, editTodo, incrimentTodo, decrimentTodo} from '../actions/todoActions';
import Todo from '../Todo';
 

class TodoTask extends Component
{


	componentWillMount(){
		this.setState({mTodo: {...this.props.mTodoTask}})
		this.setState({data: this.props.mTodoTask.data})
	}

	state = {

		jobStyle:{width: '500px'},
		empCountStyle:{width : '100px'},
		btnName: 'edit',
		data: '',
		flag: true,
		mTodo: ''
	}


	render(){
		
		return(	
				<div key={this.props.key}>	
					{/*will initialize input data to task discription to prevent readOnly inputbox*/}
					{/* {this.initializeData()} */}
					
					{/*button to incriment numebr of person assigned to a task*/}
					<button 
						onClick={this.incrimentCounter}
						key={0}
						className="btn btn-secondary btn-sm"> +
					</button>

					{/*button to Decriment numebr of person assigned to a task*/}
					<button  
						key={1}		
						onClick={this.decrimentCounter}						
						className="btn btn-secondary btn-sm glyphicon glyphicon-minus">- 
					</button>

					{/*shows number of Employes assigned a task*/}
					<span
						 style={this.state.empCountStyle}  
						 key={2}
						 className={this.getBadge()}>
							 {"Persons " +this.formatCount()}
				    </span>



					{/*input box to edit a task */}
					{this.props.mTodoTask.editingMode ? 
					<input 
						type="text" 
						style={{width: '500px'}} 
						key={3}
						value = {this.state.data}
						onChange = {this.handleChange}
					/> :  
					<span  key={4}>
						{this.props.mTodoTask.data}						
					</span>
					}
					
					     	 {/*this span is showing save value of task*/}
							{/*manageData is a function that is saveing data to collection*/}
					<button key={5} onClick={this.manageData }  className={"btn  m-2 btn-sm btn-"}>{ this.props.mTodoTask.editingMode ? "Save" : "Edit"}</button>
					
							{/*on Click this button will delete the task from collection*/}
					<button key={6}  className="btn btn-danger m-2 btn-sm" onClick={() =>{ this.props.deleteTodo(this.state.mTodo.id)}} >
						Delete
					</button>
					<br/>
				</div>	 
			); 
	}
	
 		

 	   // logic will prevent readOnly input box 	
	initializeData = () =>{
		if(this.state.flag === true) {
			// this.state.data  = this.props.task.data;
		}
		
	}

	incrimentCounter = () =>{
		var tododim = {...this.props.mTodoTask};
		tododim.data = this.state.data;
		tododim.empCount++;
		this.props.editTodo(tododim);
	}

	decrimentCounter = () =>{
		var tododim = {...this.props.mTodoTask};
		tododim.data = this.state.data;
		tododim.empCount--;
		this.props.editTodo(tododim);
	}

	handleChange = (event) => {
		event.preventDefault();
		this.setState({flag:false});
		this.setState({ data :event.target.value});
	}


	// will save data to collection
 	manageData = () => {
		 var tododim = {...this.props.mTodoTask};
		 if(this.props.mTodoTask.editingMode){
			tododim.editingMode = false;
			tododim.savedMode = true;
			tododim.data = this.state.data;
		 }
		 else{
			tododim.editingMode = true;
			tododim.savedMode = false;
			tododim.data = this.state.data;
		 }
		 this.props.editTodo(tododim);
 	}		


 	// manage color of person counter tag .. show warning color on Zero persons on a task
	getBadge(){
		const personsOnTask = this.props.mTodoTask.empCount;
		let classes = "badge m-2 badge-";
		classes += personsOnTask === 0 ? "warning" : "primary";
		return classes;
	}

	// will show "Zero" in 0 value
	formatCount(){
		const personsOnTask = this.props.mTodoTask.empCount;
		return personsOnTask === 0 ? "Zero" : personsOnTask;
	}

}
 
const mapStateToProps = (state) => ({
	todo: state.todo
});

export default connect(null, {addTodo, deleteTodo, editTodo, incrimentTodo, decrimentTodo}) (TodoTask);