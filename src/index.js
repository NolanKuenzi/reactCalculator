import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Header() {
  return (
    <div id="header">
      <h1>React Calculator</h1>
    </div>  
    );
}

class Calc extends React.Component {
  constructor(props) {
    super(props); 
      this.state = {
        input: ""
    }
    this.handleSumbit = this.handleSumbit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.solve = this.solve.bind(this);
    this.allClear = this.allClear.bind(this);
    this.del = this.del.bind(this);
    this.plusMinus = this.plusMinus.bind(this);
}

handleSumbit(event) {
  event.preventDefault();
}

handleInput(event) {
    this.setState({
      input: this.state.input + event.target.value
    });
}

solve() {
  if (this.state.input === "") {
    alert("Please Enter Values to Calculate");
  } else {
      try {
        this.setState({
          input: eval(this.state.input).toString()
        });
      } catch(error) {
          this.setState({
            input: "Syntax Error"
          });
		}
	}
}

allClear() {
  this.setState({
    input: ""
  });
}

del() {
  this.setState({
    input: this.state.input.replace(this.state.input[this.state.input.length-1], "")
  });	
}

plusMinus() {
  if (Math.sign(this.state.input[0]) === 1 || this.state.input === "") {
    this.setState({
      input: "-" + this.state.input	
    });
  } else {
      this.setState({
        input: this.state.input.replace(this.state.input[0], "")
      });	
    }
}

render() {
    return (
      <div id="containerDiv">
        <Header />
        <form onSubmit={this.handleSumbit}>
          <input type="text" id="answer" value={this.state.input} />		
          <br />
          <button className="button" id="ac" onClick={this.allClear}>AC</button>
          <button className="button" id="del" onClick={this.del}>DEL</button>
          <button className="button" id="plusMinus" onClick={this.plusMinus}>+/-</button>
          <button className="button"  value="/" onClick={this.handleInput}>/</button>
          <br />
          <button className="button" value="7" onClick={this.handleInput}>7</button>
          <button className="button" value="8" onClick={this.handleInput}>8</button>
          <button className="button" value="9" onClick={this.handleInput}>9</button>
          <button className="button" value="*" onClick={this.handleInput}>x</button>
          <br />
          <button className="button" value="4" onClick={this.handleInput}>4</button>
          <button className="button" value="5" onClick={this.handleInput}>5</button>
          <button className="button" value="6" onClick={this.handleInput}>6</button>
          <button className="button" value="-" onClick={this.handleInput}>-</button>
          <br />
          <button className="button" value="1" onClick={this.handleInput}>1</button>
          <button className="button" value="2" onClick={this.handleInput}>2</button>
          <button className="button" value="3" onClick={this.handleInput}>3</button>
          <button className="button" value="+" onClick={this.handleInput}>+</button>
          <br />
          <button className="button" value="0" onClick={this.handleInput}>0</button>
          <button className="button" value="." onClick={this.handleInput}>.</button>
          <button className="button" id="equals" value="=" onClick={this.solve}>=</button>
          <br />
        </form>
      </div>
    );
  }
}
ReactDOM.render(<Calc />, document.getElementById("root"));




