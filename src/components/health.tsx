import React, {Component} from "react";

type HealthState = {

}

type  HealthProps = {
    name: string,
    hp: number,
    hpMax: number,
    takeDamage: any

}

export class Health extends Component<HealthProps, HealthState> {
    render() {
        return (
            <div>
                <div className={"hp"}>
                    <p>{this.props.name}: </p>
                    <div id="hpCounter" className="upload__counter">{this.props.hp}/{this.props.hpMax}</div>
                </div>
                <div className={"hp"}>
                    <p>{`--> `}</p>
                    <button onClick={() => {this.props.takeDamage()}}>Наказать</button>
                    <p>{` <--`}</p>
                </div>
            </div>
        );
    }
}