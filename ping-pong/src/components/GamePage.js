import {GameBoard} from "./GameBoard";
import React from "react";
import {PointsPanel} from "./PointsPanel";
import {Score} from "../data/Score";

export class GamePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameActive: false,
            score: new Score()
        };
    }

    setNewScoreData = (childData) => {
        this.setState({score: childData})
    };

    toggleGameActive = () => {
        this.setState(prevState => ({gameActive: !prevState.gameActive}));
    };

    render() {
        return (
            <div>
                <h2>Let's play Ping Pong</h2>
                <button onClick={this.toggleGameActive}>Start/Stop Game</button>
                <PointsPanel score={this.state.score}/>
                <GameBoard gameActive={this.state.gameActive}
                           setNewScoreData={this.setNewScoreData}/>
            </div>);
    }

}
