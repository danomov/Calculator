import React from 'react';
import './App.css';

class App extends React.PureComponent {
  constructor(props){
    super(props)
    this.state = {
        input1: '',
        input2: '',
        action: '',
        answer: 'HERE WILL BE YOUR ANSWER',
    }
  }

  inputer1 = (e) => {
    this.setState({input1: e.target.value});
  }

  inputer2 = (e) => {
    this.setState({input2: e.target.value});
  }

  actioner = (e) => {
    this.setState({action: e.target.value});
  }

  reset = () => {
    this.setState({input1: '', input2: '', action: '', answer: 'HERE WILL BE YOUR ANSWER'});
  }

  answer = () => {
    if(this.state.input1 && this.state.input2 && this.state.action) {
    let answer_;
    switch(this.state.action) {
      case '+':
      answer_ = Number(this.state.input1) + Number(this.state.input2)
      this.setState({answer: answer_});
      break;
      case '-':
      answer_ = Number(this.state.input1) - Number(this.state.input2)
      this.setState({answer: answer_});
      break;
      case '*':
      answer_ = Number(this.state.input1) * Number(this.state.input2)
      this.setState({answer: answer_});
      break;
      case '/':
      answer_ = Number(this.state.input1) / Number(this.state.input2)
      this.setState({answer: answer_});
      break;
      default:
      alert('ERROR! OOPS');
    }
    }
    else {
      alert('OOPS!');
      this.reset();
    }

  }

  
  render() {
    return (
      <React.Fragment>
       <h1>Simple Calculator</h1>
       <p id='answer'>{ this.state.answer }</p> 
       <p>{ this.state.input1 + this.state.action + this.state.input2}</p>
      <div className="App">
       <input id='inputs' placeholder='Type number1' onChange = { this.inputer1 } value={ this.state.input1 }></input>
       <input id='inputs' placeholder='Type number2' onChange = { this.inputer2 } value={ this.state.input2 }></input>
       <button id='sum' value='+' onClick = { this.actioner }>+</button>
       <button id='sub' value='-' onClick = { this.actioner }>-</button>
      <span>
       <button id='multip' value='*' onClick = { this.actioner }>*</button>
       <button id='division' value='/' onClick = { this.actioner }>/</button>
       <button id='divide' onClick = { this.answer }>=</button>    
      </span>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
