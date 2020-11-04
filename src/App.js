import React from 'react'
import Counter from "./components/counter/counter.component";
import Navbar from "./components/navbar/navbar.component";

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <Navbar/>
                <Counter/>
            </div>
        )
    }
}

export default App
