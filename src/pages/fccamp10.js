import React, { Component } from 'react';


class Counter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count : 0
		};
		this.increment = this.increment.bind(this)
		this.decrement = this.decrement.bind(this)
		this.reset = this.reset.bind(this)
	}
	increment(){
		this.setState({
			count: this.state.count + 1
		})
	}
	decrement(){
		this.setState({
			count : this.state.count - 1
		})
	}

	reset() {
		this.setState({
			count: 0
		})
	}

	render(){
		return(
			<div>
				<button onClick={this.increment}>Increment</button>
				<button onClick={this.decrement}>Increment</button>
				<button onClick={this.reset}>Increment</button>
				<h1>Current Count: {this.state.count}</h1>
			</div>
			);
	}
};
export default Counter;