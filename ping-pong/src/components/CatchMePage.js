import React from "react";
import './CatchMe.css'

export class CatchMePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            gameActive: false,
            predator: this.getRandomOutOf(64),
            prey: this.getRandomOutOf(64)
        };
    }

    render() {
        return (
            <div className='catchme'>
                <h2> Cat me if you can.</h2>
                <div className='catchme board'> {this.renderFields()} </div>
            </div>);
    }

    renderFields() {
        let fields = [];
        let i;
        for (i = 0; i < 64; i++) {
            fields.push(this.fieldTypeForId(i));
        }
        return fields;
    }

    fieldTypeForId(id) {
        if (this.state.predator === id) {
            return this.predatorField(id);
        }
        if (this.state.prey === id) {
            return this.preyField(id);
        }
        if(this.getNeighbourFields(this.state.predator).includes(id)){
            return this.possibleNextPosition(id);
        }
        return this.defaultField(id);
    }

    getNeighbourFields(id) {
        let neighbours = [id];
        if(this.isValidId(id+1) && this.isSameLine(id, id+1)) neighbours.push(id+1);
        if(this.isValidId(id-1) && this.isSameLine(id, id-1)) neighbours.push(id-1);

        if(this.isValidId(id+8)) neighbours.push(id+8);
        if(this.isValidId(id+7) && this.isSameLine(id+7, id+8)) neighbours.push(id+7);
        if(this.isValidId(id+9) && this.isSameLine(id+9, id+8)) neighbours.push(id+9);

        if(this.isValidId(id-8)) neighbours.push(id-8);
        if(this.isValidId(id-7) && this.isSameLine(id-7, id-8)) neighbours.push(id-7);
        if(this.isValidId(id-9) && this.isSameLine(id-9, id-8)) neighbours.push(id-9)
        return neighbours
    }

    isValidId(id){
        return id<64 && id>0;
    }
    isSameLine(id1,id2){
        let n = id1;
        let m = id2;
        return (n-n%8)===(m-m%8);
    }

    predatorField(id) {
        return (
            <div className='catchme field'>
                <img src={require('./cat_running.jpg')} alt="image"
                     className="catchme cat"
                     onClick={() => this.setNextPosition(id)}/>
            </div>
        );
    }

    preyField(id) {
        return (
            <div className='catchme field'>
                <img src={require('./cat_fear.jpg')} alt="image"
                     className="catchme cat"
                     onClick={() => this.setNextPosition(id)} />
            </div>
        );
    }

    getRandomOutOf(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    possibleNextPosition(id) {
        return (
            <div className='catchme field clickable'
                 onClick={() => this.setNextPosition(id)}> {id} </div>
        );
    }

    defaultField(id) {
        return (
            <div className='catchme field'> {id} </div>
        );
    }

    setNextPosition(id) {
        let nextPrey = this.nextPreyPosition();
        if(nextPrey === id){
            alert("Die Katz is gessen.")
        }
        this.setState({predator: id,  prey: nextPrey})
    }

    nextPreyPosition(){
        let options = this.getNeighbourFields(this.state.prey);
        return options[(this.getRandomOutOf(options.length - 1))];
    }
}