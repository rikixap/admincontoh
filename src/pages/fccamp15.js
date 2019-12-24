import React, { Component } from 'react';

class Items = (props) => {
	return (<h1>Current Quantity of Items in cart: {props.quantity}</h1>
		);

};

Items.propTypes = {
	quantity: PropTypes.number.isRequired
};

Items.defaultProps = {
	quantity: 0
};

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
	render(){
		return (
		<Items />
		);
	}
};


export default ShoppingCart ;