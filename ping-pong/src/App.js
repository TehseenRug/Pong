import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import {LandingPage} from "./components/LandingPage";
import {GamePage} from "./components/GamePage";
import {CatchMePage} from "./components/CatchMePage";

function App() {
    return (
        <Router>
            <div>
                <h1 className="title">Pong</h1>
                <nav className="header">
                    <ul>
                    <li><Link to={'/'}> Home </Link></li>
                    <li><Link to={'/pingpong'}>Let's play</Link></li>
                    <li><Link to={'/catchme'}>Cat Me If You Can</Link></li>
                    </ul>
                </nav>
                <hr/>
                <Switch>
                    <Route exact path='/' component={LandingPage}/>
                    <Route path='/pingpong' component={GamePage}/>
                    <Route path='/catchme' component={CatchMePage}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
