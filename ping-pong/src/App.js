import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {LandingPage} from "./components/LandingPage";
import {GamePage} from "./components/GamePage";

function App() {
    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li><Link to={'/'} className="nav-link"> Home </Link></li>
                        <li><Link to={'/pingpong'} className="nav-link">Let's play</Link></li>
                    </ul>
                </nav>
                <hr />
                <Switch>
                    <Route exact path='/' component={LandingPage} />
                    <Route path='/pingpong' component={GamePage} />
                </Switch>
            </div>
        </Router>
        // <div className="App">
        //     <header className="App-header">
        //         <GameBoard value="this is the value 2" />
        //     </header>
        // </div>
    );
}

export default App;
