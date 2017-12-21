import React, { Component } from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li><Link to="/sample">Sample</Link></li>
                        <li><Link to="/progress-bar">ProgressBar</Link></li>
                    </ul>

                    <hr />

                    <Switch>
                        <Redirect exact from="/" to="/sample" />
                        <Route exact path="/sample" component={() => <h1>Sample</h1>} />
                        <Route exact path="/progress-bar" component={() => <h1>ProgressBar</h1>} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
