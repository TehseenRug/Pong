import React from 'react';
import './App.css';
import {GameBoard} from "./GameBoard";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <GameBoard value="this is the value 2" />
            </header>
        </div>
    );
}

export default App;
