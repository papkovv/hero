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
            <div>
                <h1>{this.props.name}: {this.props.count}</h1>
                <button onClick={() => {this.props.increase(this.props.id)}}>+</button>
                <button onClick={() => {this.props.decrease(this.props.id)}}>-</button>
            </div>
        );
    }
}