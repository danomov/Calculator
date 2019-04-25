import React from 'react';
import './App.css';

class App extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
        input1: '',
        input2: '',
        action: '',
        answer: 'HERE WILL BE YOUR ANSWER',
    };
    this.inputRef = React.createRef();
  }

  //Change input state when type in input
  handleChange = (e) => {
    if(!this.state.action && !this.state.input2){
      this.setState({input1: e.target.value});
    }
    else if(this.state.action && this.state.input1){
      this.setState({input2: e.target.value});
    }
  }

  //Set state of action after action button click
  handleAction = (e) => {
    this.inputRef.current.value = '';
    this.inputRef.current.focus();
    this.setState({action: e.target.value});
  }

  //Reset all data before in state
  handleReset = () => {
    this.inputRef.current.value = '';
    this.setState({input1: '', input2: '', action: '', answer: 'HERE WILL BE YOUR ANSWER'});
  }

  //Validate input field(works with issues depends from browser)
  handleValidate = (evt) => {
    let theEvent = evt || window.event;
    let key;
    // Handle paste
    if (theEvent.type === 'paste') {
        key = evt.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    let regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  //Partly reset data(example. when typed wrong thing)
  handleResetPartly = () => {
    if(this.state.input1 && !this.state.input2){
      this.inputRef.current.value = '';
      this.setState({input1: '', action: ''});
    }
    else if(this.state.input2){
      this.inputRef.current.value = '';
      this.setState({input2: ''});
    }
  }

  //Does the calculation and clears input field and also state inputs and action
  handleAnswer = () => {
    if(this.state.input1 && this.state.input2 && this.state.action) {
    let answer_;
    switch(this.state.action){
      case '+':
      answer_ = Number(this.state.input1) + Number(this.state.input2);
      this.inputRef.current.value = '';
      this.setState({answer: answer_, input1: '', input2: '', action: ''});
      break;
      case '-':
      answer_ = Number(this.state.input1) - Number(this.state.input2);
      this.inputRef.current.value = '';
      this.setState({answer: answer_, input1: '', input2: '', action: ''});
      break;
      case '*':
      answer_ = Number(this.state.input1) * Number(this.state.input2);
      this.inputRef.current.value = '';
      this.setState({answer: answer_, input1: '', input2: '', action: ''});
      break;
      case '/':
      answer_ = Number(this.state.input1) / Number(this.state.input2);
      this.inputRef.current.value = '';
      this.setState({answer: answer_, input1: '', input2: '', action: ''});
      break;
      default:
      alert('ERROR! OOPS');
      this.handleReset();
    }
    }
    else {
      alert('OOPS!');
      this.handleReset();
    }
  }

  //When page loads focus on input
  componentDidMount(){
    this.inputRef.current.focus();
  }
  
  render() {
    return (
      <React.Fragment>
       <h1>Simple Calculator</h1>
       <p id='answer'>{this.state.answer}</p> 
       <p>{this.state.input1 + this.state.action + this.state.input2}</p>
      <div className="App">
       <input id='input' type='text' onKeyPress={this.handleValidate} placeholder='Type number' ref={this.inputRef} onChange={this.handleChange} autoComplete='off'/>
       <button id='clearAll' value='AC' onClick={this.handleReset}>AC</button>
       <button id='clear' value='C' onClick={this.handleResetPartly}>C</button>
       <button id='sum' value='+' onClick={this.handleAction}>+</button>
       <button id='sub' value='-' onClick={this.handleAction}>-</button>
      <span>
       <button id='multip' value='*' onClick={this.handleAction}>*</button>
       <button id='division' value='/' onClick={this.handleAction}>/</button>
       <button id='divide' onClick={this.handleAnswer}>=</button>    
      </span>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
