import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
          counter: 0,
        };
      }
      increment = () => {
        this.setState({ counter: this.state.counter + 1 });
      };
      decrement = () => {
        if (this.state.counter > 0) {
          this.setState({ counter: this.state.counter - 1 });
        }
      };
    
      reset = () => {
        this.setState({ counter: 0 });
      };



    render() {
        return (
            <div>
               <h1> ceci est un Class (statefull) </h1>
               <button onClick={this.decrement} > - </button> 
               <span>  {this.state.counter} </span>
               <button onClick={this.increment} > + </button>
               <br/>
               <button onClick={this.reset}> reset </button>


            </div>
        );
    }
}

export default Counter;