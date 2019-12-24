import React, {Component} from 'react';


class ClickMe extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "Hello"
		};

		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState({
			text: "You clicked!"
		});
	}
	render(){
		return(
			<div>
				<button onClick={this.handleClick}>Click Me</button>
				<h1>{this.state.text}</h1>
			</div>
			)
	}
}

export default ClickMe;