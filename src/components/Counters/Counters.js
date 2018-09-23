import React, { Component } from "react";
import Counter from "./Counter/Counter";
class Counters extends Component {
    render() {
        return (
            <div className="container">
                <button
                    className="btn btn-primary btn-sm m-2"
                    onClick={this.props.onReset}
                >
                    Reset
                </button>
                {this.props.counters.map(c => (
                    <Counter
                        key={c.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        counter={c}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
