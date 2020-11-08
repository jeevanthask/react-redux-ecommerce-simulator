import React from 'react'
import './counters.component.css'
import Counter from "../counter/counter.component";

class Counters extends React.Component {
    constructor() {
        super();
        this.state = {
            counters: [
                {id: 1, count: 1},
                {id: 2, count: 12},
                {id: 3, count: 0}
            ]
        }
    }

    onClickDelete = () => {
        alert('delete clicked!')
    }

    render() {
        return (
            <div>
                {
                    this.state.counters.map(count => <Counter key={count.id} count={count.count}
                                                              onClickDelete={this.onClickDelete}/>)
                }
            </div>
        );
    }
}

export default Counters
