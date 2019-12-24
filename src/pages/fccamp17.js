import React, { Component } from 'react';

const List = (props) => {
	return <p>{props.tasks.join(', ')}</p>
};

class ToDo extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return(
		<div>
			<h1>To Do List</h1>
			<h2>Today</h2>
			<List tasks={['study','exercise']} />
			<h2>Tomorrow</h2>
			<List tasks={['call Sam','grocery shopping','order tickets']} />
		</div>
		)
	}
}

export default ToDo;