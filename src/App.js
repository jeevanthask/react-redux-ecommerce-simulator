import React from 'react'
import Counter from "./components/counter/counter.component";
import Navbar from "./components/navbar/navbar.component";
import Counters from "./components/counters/counters.component";


class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <Counters/>
                    </div>
                </div>


            </div>
        )
    }
}

export default App
