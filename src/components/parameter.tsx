import {Component} from "react";

type ParameterState = {

}

type  ParameterProps = {
    id: number,
    name: string,
    count: number,
    increase: any,
    decrease: any
}

export class Parameter extends Component<ParameterProps, ParameterState> {
    constructor(props: ParameterProps) {
        super(props);
    }

    render() {
        return (
            <div className={"parameter"}>
                <p>{this.props.name}: </p>
                <div className={"counter"}>
                    <button onClick={() => {this.props.decrease(this.props.id)}}>-</button>
                    <p>{this.props.count}</p>
                    <button onClick={() => {this.props.increase(this.props.id)}}>+</button>
                </div>

            </div>
        );
    }
}