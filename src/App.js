import React, {Component} from 'react';
import './App.css';
// import TableProd from "./TableProd";
import FormAddProd from "./FormAddProd"

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row center">
                    <div className="col s12 m10 offset-m1">
                        <h4 className="header">Sample work React.js</h4>
                    </div>
                </div>
                <FormAddProd/>
                {/*
                <div id="tableProd">
                <TableProd/>
                </div>
*/}
            </div>
        );
    }
}

export default App;
