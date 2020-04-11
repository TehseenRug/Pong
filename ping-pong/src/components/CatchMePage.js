import React from "react";
import './CatchMe.css'

export class CatchMePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameActive: false,
            currentPosition: 20
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
        if(this.choosableField(id)){
            return (
                <div className='catchmefield catchmeclickable' onClick={() => alert("You clicked " + id)}> {id} </div>
            );
        }
        return (
            <div className='catchmefield'>
                <img src={require('./cat.jpg')}  alt="image" className="catchmecat"/>
            </div>
        );

    }

    choosableField(id){
        if(this.state.currentPosition === id){
            return false;
        }
        return true;
    }
}