import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";

import ProgressPage from "./ProgressPage";
import InputPage from "./InputPage";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/sample">Sample</Link></li>
                        <li><Link to="/progress">Progress</Link></li>
                        <li><Link to="/input">Input</Link></li>
                    </ul>

                    <hr />

                    <Switch>
                        <Redirect exact from="/" to="/sample" />
                        <Route exact path="/sample" component={() => <h1>Sample</h1>} />
                        <Route exact path="/progress" component={ProgressPage} />
                        <Route exact path="/input" component={InputPage} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
