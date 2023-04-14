import React, {Component} from "react";

type UploadState = {

}

type  UploadProps = {
    upload: any
}

export class Upload extends Component<UploadProps, UploadState> {
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
                    <label htmlFor="file">
                        <span>--{'>'}Загрузить{'<'}--</span>
                        <input
                            id="file"
                            type={"file"}
                            onChange={this.handlerSubmit}
                            className="upload"
                        />
                    </label>
                </div>
            );
    }
}