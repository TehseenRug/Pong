import * as React from "react";


export class GameBoard extends React.Component {

    render() {
        if (this.props.gameActive) {
            return (
                <div>
                    <div>
                        This should be the game board in active mode!
                    </div>
                </div>);
        }
        else{
            return (
                <div>
                    <div>
                        This should be the game board in paused mode!
                    </div>
                </div>);
        }
    }


}
