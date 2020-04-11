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
                <div className='catchmeboard'> {this.renderFields()} </div>
            </div>);
    }

    renderFields(){
        let fields = [];
        let i;
        for (i = 0; i < 64; i++) {
            fields.push(this.renderField(i));
        }
        return fields;
    }

    renderField(id){
        return (
            <div className='catchmefield'> {id} </div>
        );
    }
}