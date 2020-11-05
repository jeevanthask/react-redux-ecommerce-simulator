import React from 'react'
import './counter.component.css'

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    incrementCount = () => {
        alert('ndnfidnf')
    }

    render() {
        return (
            <div className="counterdiv">
                <span class="badge badge-pill badge-primary p-2">10</span>
                <button className="btn btn-primary" onClick={this.incrementCount}>Increment</button>
                <button className="btn btn-warning">Decrement</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        )
    }
}

export default Counter
