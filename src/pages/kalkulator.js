import React,{ Component } from 'react';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';
import './kalkulator.css';
class Kalkulator extends Component {
	constructor() {
		super();

		this.state = {
			result: ""
		}
	}
	onClick  = button => {
		if(button === "="){
			this.calculate()
		}
		else if (button === "C"){
			this.reset()
		}
		else if (button === "CE"){
			this.backspace()
		}
		else {
			this.setState({
				result : this.state.result + button
			})
		}
	};

	calculate = () => {
		var checkResult = ''
		if(this.state.result.includes('--')){
			checkResult = this.state.result.replace('--','+')
		}
		else {
			checkResult = this.state.result
		}
		try {
			this.setState({
				// eslint-disable-next-line
				result: (eval(checkResult) || "") + ""
			})
		} catch(e) {
			this.setState({
				result: "error"
			})
		}
	};
	reset = () => {
		this.setState({
			result: ""
		})
	};
	backspace = () => {
		this.setState({
			result: this.state.reset.slice(0,-1)
		})
	};

	render() {
		return(
			<div>
				<div className="calculator-body">
					<h1>Simple Calculator</h1>
					<ResultComponent result={this.state.result}/>
					<KeyPadComponent onClick={this.onClick}/>
				</div>
			</div>
			);
	}
}

export default Kalkulator;