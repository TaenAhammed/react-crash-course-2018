import React, { Component } from "react";
class Counter extends Component {
    state = {
        value: this.props.counter.value
    };

    handleIncrement = id => {
        this.setState({ value: this.state.value + 1 });
    };

    render() {
        return (
            <div className="container">
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={this.handleIncrement}
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    Delete
                </button>
            </div>
        );
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? "Zero" : value;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;
