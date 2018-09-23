import React, { Component } from "react";
class Counter extends Component {
    state = {
        count: 0,
        tags: []
    };

    render() {
        return (
            <div className="container">
                {this.state.tags.length === 0 && "Please Create a Tag!"}
                {/* <span className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul> */}
                {this.renderTags()}
            </div>
        );
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>There is no Tags!</p>;
        return (
            <ul>
                {this.state.tags.map(tag => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
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
