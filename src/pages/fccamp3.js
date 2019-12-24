import  React,{ Component } from 'react';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    	<div>
      <h1>
      {
        this.props.fiftyFifty ?
        'You Win!' :
        'You Lose!'
      }
      </h1>	
     
      </div>
    )
  };
};

class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    const expression = Math.random();
    return (
      <div>
        <button onClick={this.handleClick}>Play Again</button>
        <Result fiftyFifty={expression} />
        <p>{'Turn: ' + this.state.counter}</p>
      </div>
    );
  }
};

export default Result;