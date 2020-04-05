import * as React from "react";
import {Score} from "../data/Score";
import './GameBoard.css';
import {Ball} from "../data/Ball";

export class GameBoard extends React.Component {

    constructor(props) {
        super(props);
        this.domRef = React.createRef();
    }

    sendNewScoreData = () => {
        this.props.setNewScoreData(this.updateScore());
    };


    // noinspection JSUnusedGlobalSymbols
    componentDidUpdate = () => {
        this.drawBoard();
    };

    render() {
        if (this.props.gameActive) {
            return (
                this.getBoard());
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

    getBoard() {
        return <div>
            <canvas ref={this.domRef} className="GameBoard" width="800" height="400">
            </canvas>
            <button onClick={this.sendNewScoreData}>Increase Score</button>
        </div>;
    }

// noinspection JSMethodCanBeStatic
    updateScore() {
        let score = new Score();
        score.scorePlayer1 = 1;
        score.scorePlayer2 = 0;

        return score;
    }

    drawBoard() {
        const canvas = this.domRef.current;

        if (canvas) {
            let ctx = canvas.getContext("2d");
            ctx.fillStyle = "#FFFFFF";
            ctx.fillRect(0,0,800,400);

            let ball = new Ball();
            ball.draw(ctx);
        }
    }
}
