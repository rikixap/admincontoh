import React, { Component } from 'react';

class MyApps extends React.Component{
	constructor(props){
		super(props);
		this.state= {
			name: 'RIKIXAP'
		}
	}
	render(){
		return(
		<div>
			<Navbar name={this.state.name}/>
		</div>
			)
	}
}



class Navbar extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div>
				<h1>Hello, my name is : {this.props.name}</h1>
			</div>
			)
	}
}

export default MyApps;