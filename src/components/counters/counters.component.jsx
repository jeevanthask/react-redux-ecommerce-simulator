import React from 'react'
import './counters.component.css'
import Counter from "../counter/counter.component";

class Counters extends React.Component {
    constructor() {
        super();
        this.state = {
            counters: [
                {id: 1, count: 0},
                {id: 2, count: 0},
                {id: 3, count: 0}
            ]
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.counters.map(count => <Counter/>)
                }
            </div>
        );
    }
}

export default Counters
