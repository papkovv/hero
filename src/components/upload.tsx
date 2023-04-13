import React, {Component} from "react";

type UploadState = {

}

type  UploadProps = {
    upload: any
}

export class Upload extends Component<UploadProps, UploadState> {
    constructor(props: UploadProps) {
        super(props);

    }

    handlerSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
        let reader = new FileReader()
        reader.readAsText(event.target.files![0])
        reader.onload = () => {
            this.props.upload(reader.result)
        }
    }

    render() {
        return (
                <div>
                    <input
                        id={"fileLoaderButton"}
                        type={"file"}
                        onChange={this.handlerSubmit}
                    />
                </div>
            );
    }
}