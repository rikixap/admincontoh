import React, { Component } from 'react';

const textAreaStyles = {
	width: 235,
	margin:5
}

class MyTodoList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			userInput:'',
			toDoList:[]
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit(){
	const itemsArray = this.state.userInput.split(',');
	this.setState({
		toDoList: itemsArray
	});
	}
	handleChange(e){
		this.setState({
			userInput: e.target.value
		});
	}
	render(){
		const items = this.state.toDoList.map(i => <li>{i}</li>);
		return(
			<div>
				<textarea onChange={this.handleChange} value={this.state.userInput} style={textAreaStyles}/>
				<button onClick={this.handleSubmit}>Create List</button>
				<h1>MyTodoList:</h1>
				<ul>
					{items}
				</ul>
			</div>
			)
	}
}

export default MyTodoList;