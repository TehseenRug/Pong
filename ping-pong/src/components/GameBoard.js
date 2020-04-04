import * as React from "react";

let interval = 0;

export class GameBoard extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {time: 0}
    // }

    // componentDidMount() {
    //     interval = window.setInterval(() => this.tick(), 1000);
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(interval);
    // }

    // tick() {
    //     this.setState({
    //         time: this.state.time + 1
    //     });
    // }

    render() {
        return (
            <div>
                <button onClick={this.startGame}>Start Game</button>
                <div>
                    This should be the game board!
                    {/*{this.props.value}*/}
                </div>
            </div>);
    }

    startGame() {
        console.log("Game started!");
    }


}
