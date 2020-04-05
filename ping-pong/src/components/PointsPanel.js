import * as React from "react";

export class PointsPanel extends React.Component {

    render() {
        return (
            <span>
                <div>
                Player 1 Score: {this.props.score.scorePlayer1}
                </div>
                <div>
                Player 2 Score: {this.props.score.scorePlayer2}
                </div>
            </span>
        );
    }

}
