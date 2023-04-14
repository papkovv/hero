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
            <div className={"characteristic"}>
                <p>{this.props.name}: </p>
                <p>{this.props.count}</p>
            </div>
        );
    }
}