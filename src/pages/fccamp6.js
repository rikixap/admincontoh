import React, {Component} from 'react';

class OnlyEvens extends React.Component {
	constructor(props){
		super(props);
	}
	shouldComponentUpdated(nextProps,nextState) {
		console.log(this.props.value);
		console.log(nextState.value);
		if ((nextProps.value % 2) === 0){
			return true
		}
	}
	componentDidUpdated() {
		 console.log('Component re-rendered.');
	}
	render() {
		return <h1>{this.props.value}</h1>
	}
} ;

class Controller extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			value:0
		};
		this.addValue = this.addValue.bind(this);
	}
	addValue() {
		this.setState({
			value: this.state.value + 1
		});
	}
	render() {
		return(
		<div>
	 <button onClick={this.addValue}>Add</button>
	  <OnlyEvens value={this.state.value}/>
		</div>
		)
	}


}

export default Controller;