import React from 'react'
import './counter.component.css'

class Counter extends React.Component {
    render() {
        return (
            <div className="counterdiv">
                <span>10</span>
                <button className="btn btn-primary">Increment</button>
                <button className="btn btn-warning">Decrement</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        )
    }
}

export default Counter
