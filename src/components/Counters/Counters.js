import React, { Component } from "react";
import Counter from "./Counter/Counter";
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters });
    };

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    render() {
        return (
            <div className="container">
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.handleReset}
                >
                    Reset
                </button>
                {this.state.counters.map(c => (
                    <Counter
                        key={c.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={c}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
