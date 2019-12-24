import React, { Component } from 'react';

class Items = (props) => {
	return <h1>Current Quantity of Items in Cart : {props.quantity}</h1>
}

Items.defaultProps = {
	quantity: 10
}

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Items quantity={10} />
	}
};

export default ShoppingCart;