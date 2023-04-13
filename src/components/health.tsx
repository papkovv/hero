import {Component} from "react";

type HealthState = {

}

type  HealthProps = {
    name: string,
    hp: number,
    hpMax: number,
    takeDamage: any

}

export class Health extends Component<HealthProps, HealthState> {
    constructor(props: HealthProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}: {this.props.hp}/{this.props.hpMax}</h1>
                <button onClick={() => {this.props.takeDamage()}}>Получить урон</button>
            </div>
        );
    }
}