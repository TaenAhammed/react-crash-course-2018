import React, { Component } from "react";
import Counter from "./Counter/Counter";
class Counters extends Component {
    render() {
        console.log("Counters - Rendered");
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div className="container">
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                {counters.map(c => (
                    <Counter
                        key={c.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={c}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
