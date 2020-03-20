import React from 'react';
import ReactDOM from 'react-dom';
import Giphy from "./components/Giphy"

class App extends React.Component {
    
    render() {
        return (
            <div>
               <Giphy />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));