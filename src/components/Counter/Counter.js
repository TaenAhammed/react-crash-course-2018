import React, { Component } from "react";
class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    handleIncrement = id => {
        console.log(id);
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div className="container">
                <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => this.handleIncrement({ id: 1 })}
                >
                    Increment
                </button>
                <ul>
                    {this.state.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
            </div>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? "Zero" : count;
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;
