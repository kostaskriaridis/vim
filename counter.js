import React, { Component } from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.increment = this.increment.bind(this);

        this.state = {
            counter: 0
        };
    }

    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.increment}>Increment</button>
                <div>{this.state.counter}</div>
            </div>
        );
    }
}
