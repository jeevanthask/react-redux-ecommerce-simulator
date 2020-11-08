import React from 'react'
import './counter.component.css'

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: props.count
        }
    }

    incrementCount = () => {
        this.setState({
            count: this.state.count + 1
        })

    }

    decrementCount = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    renderCountValue = () => {
        if (this.state.count === 0) {
            return 'Zero'
        }
        return this.state.count
    }

    changeCountColor = () => {
        if (this.state.count === 0) {
            return "badge badge-pill badge-warning p-2"
        }
        return "badge badge-pill badge-primary p-2"
    }

    onClickDelete = () => {

    }

    render() {
        return (
            <div className="counterdiv">
                <span className={this.changeCountColor()}>{this.renderCountValue()}</span>
                <button className="btn btn-primary" onClick={this.incrementCount}>Increment</button>
                <button className="btn btn-warning" onClick={this.decrementCount}>Decrement</button>
                <button className="btn btn-danger">Delete</button>
            </div>
        )
    }

}

export default Counter
