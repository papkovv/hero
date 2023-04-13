import {Component} from "react";

type CharacteristicState = {

}

type  CharacteristicProps = {
    name: string,
    count: number

}

export class Characteristic extends Component<CharacteristicProps, CharacteristicState> {
    constructor(props: CharacteristicProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.name}: {this.props.count}</h1>
            </div>
        );
    }
}