import React from "react";
import './CatchMe.css'

export class CatchMePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameActive: false,
        };
    }

    render() {
        return (
            <div className='catchme'>
                <h2> Catch me if you can.</h2>
            </div>);
    }
}