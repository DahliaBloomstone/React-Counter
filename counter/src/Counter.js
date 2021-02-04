import React, { Component } from "react";

//functionally vs class oriented 
//lightweight: functionally 
//high level: class structure 
//declare class with name of component
//extended component class, necessary syntax 
//exporting 
//state: a way to keep track of instance variables within your component 
//props: something that will run whenever component is mounted, or created
//modular way, make our buttons change the state of our component
//state is being incremented or decrimented 
//how do we connect the buttons to the functions? Javascript event listeners


class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
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
            <p> This is our counter </p>
            <p>Current Count: {this.state.count} </p>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decriment}>Decrement</button>
        </div>
    );
  }   

}


export default Counter;