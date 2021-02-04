import React, { Component } from "react";

class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 100
        };
    }

increment = () => {
    this.setState({
        count: this.state.count + 1 
    });
};

decriment = () => {
    this.setState({
        count: this.state.count - 1 
    });
};


render() {
    return (
        <div>
            <p> :( </p>
            <p>Time Left: {this.state.count} </p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decriment}>Decrement</button>
        </div>
    );
  }   

  componentDidMount () {
      this.myInterval = setInterval(() => {
          this.setState({
              count: this.state.count - 1
          })
      }, 1000)
  }


componentWillUnmount () {
    clearInterval(this.myInterval)
    }
}


export default Counter;