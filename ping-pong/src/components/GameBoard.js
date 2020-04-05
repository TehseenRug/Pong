import * as React from "react";
import {Score} from "../data/Score";

export class GameBoard extends React.Component {

    sendNewScoreData = () => {
        this.props.setNewScoreData(this.updateScore());
    };


    render() {
        if (this.props.gameActive) {
            return (
                <div>
                    <div>
                        This should be the game board in active mode!
                    </div>
                    <button onClick={this.sendNewScoreData}>Increase Score</button>
                </div>);
        } else {
            return (
                <div>
                    <div>
                        This should be the game board in paused mode!
                    </div>
                </div>
            );
        }
    }

    // noinspection JSMethodCanBeStatic
    updateScore() {
        let score = new Score();
        score.scorePlayer1 = 1;
        score.scorePlayer2 = 0;
        return score;
    }
}
