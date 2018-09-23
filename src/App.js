import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Counters from "./components/Counters/Counters";

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    constructor() {
        super();
        console.log("App - Constructor");
    }

    componentDidMount = () => {
        console.log("App - Mounted");
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
        console.log("App - Rendered");
        return (
            <React.Fragment>
                <NavBar
                    totalActiveCounters={
                        this.state.counters.filter(counter => counter.value > 0)
                            .length
                    }
                />
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onIncrement={this.handleIncrement}
                    onDelete={this.handleDelete}
                />
            </React.Fragment>
        );
    }
}

export default App;
