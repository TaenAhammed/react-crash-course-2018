import React, { Component } from "react";
class Counter extends Component {
    state = {
        count: 0
    };

    styles = {
        fontSize: 40,
        fontWeight: 700
    };

    render() {
        return (
            <div className="container">
                <span
                    className="badge badge-primary m-2"
                    style={{ fontSize: 40 }}
                >
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }
}
export default Counter;
