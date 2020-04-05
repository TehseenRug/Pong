import {GameBoard} from "./GameBoard";
import React from "react";

export class GamePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {gameActive: false}
    }

    toggleGameActive = () => {
        this.setState(prevState => ({gameActive: !prevState.gameActive}));
    };

    render() {
        return (
            <div>
                <h2>Let's play Ping Pong</h2>
                <button onClick={this.toggleGameActive}>Start Game</button>
                <GameBoard gameActive={this.state.gameActive}/>
            </div>);
    }

}
