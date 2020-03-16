import {GameBoard} from "./GameBoard";
import React from "react";

export class GamePage extends React.Component {
    render() {
        return (
            <div>
                <h2>Let's play Ping Pong</h2>
                <GameBoard value="this is the value 2"/>

            </div>
        )
    }
}
