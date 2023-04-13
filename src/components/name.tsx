import React, {Component} from "react";

type NameState = {

}

type  NameProps = {
    name: string,
    changeName: any
}

export class Name extends Component<NameProps, NameState> {
    constructor(props: NameProps) {
        super(props);
    }

    changeEvent = (event: React.ChangeEvent<HTMLInputElement>) => {
        const enteredName = event.target.value
        this.props.changeName(enteredName)
    }

    render() {
        return (
            <div>
                <h1>Меня зовут: {this.props.name}</h1>
                <h1>Изменить имя: </h1>
                <input type={"text"} value={this.props.name} onChange={this.changeEvent}/>
            </div>
        );
    }
}