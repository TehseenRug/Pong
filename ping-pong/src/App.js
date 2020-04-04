import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {LandingPage} from "./components/LandingPage";
import {GamePage} from "./components/GamePage";

function App() {
    return (
        <Router>
            <div>
                <h1 className="title">Pong</h1>
                <nav className="header">
                    <ul>
                    <li><Link to={'/'}> Home </Link></li>
                    <li><Link to={'/pingpong'}>Let's play</Link></li>
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route path='/pingpong' component={GamePage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
