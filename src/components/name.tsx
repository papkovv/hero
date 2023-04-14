import React, {Component} from "react";

type NameState = {

}

type  NameProps = {
    name: string,
    changeName: any
}

export class Name extends Component<NameProps, NameState> {
    changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value
        this.props.changeName(enteredName)
    }

    render() {
        return (
            <div className={"name"}>
                <p>{`-->`}</p>
                <input className={"nameInput"} type={"text"} value={this.props.name} onChange={this.changeEvent}/>
                <p>{`<--`}</p>
            </div>
        );
    }
}