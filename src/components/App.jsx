import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Films from "./Films";
import People from "./People";
import Film from "./Film";
import Person from "./Person";
import logo from "../assets/ghibli-logo.png";

export default class App extends Component {
    render() {
        return <Router>
            <Fragment>
                <img src={logo} style={{display:"block"}}/>
                <Link class="btn btn-primary" to="/home ">Go Home</Link>
                <Link class="btn btn-primary" to="/films " >View Films</Link>
                <Link class="btn btn-primary" to="/people ">View People</Link>
                <Switch>
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/films" component={Films} />
                    <Route exact path="/people" component={People} />
                    <Route path="/films/:filmID" component={Film} />
                    <Route path="/people/:personID" component={Person} />
                </Switch >
            </Fragment>
        </Router>;
    }
}
