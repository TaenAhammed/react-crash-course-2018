import React, { Component } from "react";
import Counter from "./Counter/Counter";

export class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };
    render() {
        return (
            <div>
                {this.state.counters.map(c => (
                    <Counter key={c.id} value={c.value}>
                        <h4>#Counter :{c.id}</h4>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
